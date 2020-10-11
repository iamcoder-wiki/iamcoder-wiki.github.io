let search_data = {};

let searchBox = document.getElementsByClassName('search-w')[0];
// 0: Closed
// 1: Empty
// 2: Typed anything
let searchState = 0;

let inputWrap = document.getElementsByClassName('search-input-w')[0];
let input = document.getElementById('t-s-input');
let button = document.getElementById('t-s-button');
let result = document.getElementById('t-search-result');
let selected = null;
let list = [];

// code from https://github.com/hakimel/css/tree/master/progress-nav
// thanks for great code!
//
// table of contents
(function toc() {
    let toc = document.querySelector('.toc');
    let tocPath = document.querySelector('.toc-marker path');
    let tocItems;

    // Factor of screen size that the element must cross
    // before it's considered visible
    let TOP_MARGIN = 0.05, BOTTOM_MARGIN = 0;
    let pathLength;
    let lastPathStart, lastPathEnd;

    window.addEventListener('resize', drawPath, false);
    window.addEventListener('scroll', sync, false);
    drawPath();

    function drawPath() {
        tocItems = [].slice.call(toc.querySelectorAll('li'));

        // Cache element references and measurements
        tocItems = tocItems.map(function (item) {
            let anchor = item.querySelector('a');
            let target = document.getElementById(anchor.getAttribute('href').slice(1));

            return {
                listItem: item,
                anchor: anchor,
                target: target
            };
        });

        // Remove missing targets
        tocItems = tocItems.filter(function (item) {
            return !!item.target;
        });

        let path = [];
        let pathIndent;

        tocItems.forEach(function (item, i) {
            let x = item.anchor.offsetLeft - 5,
                y = item.anchor.offsetTop,
                height = item.anchor.offsetHeight;

            if (i === 0) {
                path.push('M', x, y, 'L', x, y + height);
                item.pathStart = 0;
            } else {
                // Draw an additional line when there's a change in
                // indent levels
                if (pathIndent !== x) path.push('L', pathIndent, y);

                path.push('L', x, y);

                // Set the current path so that we can measure it
                tocPath.setAttribute('d', path.join(' '));
                item.pathStart = tocPath.getTotalLength() || 0;

                path.push('L', x, y + height);
            }

            pathIndent = x;

            tocPath.setAttribute('d', path.join(' '));
            item.pathEnd = tocPath.getTotalLength();
        });

        pathLength = tocPath.getTotalLength();

        sync();
    }

    function sync() {
        let windowHeight = window.innerHeight;
        let pathStart = pathLength, pathEnd = 0;
        let visibleItems = 0;

        tocItems.forEach(function (item) {
            let targetBounds = item.target.getBoundingClientRect();

            if (targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)) {
                pathStart = Math.min(item.pathStart, pathStart);
                pathEnd = Math.max(item.pathEnd, pathEnd);

                visibleItems += 1;

                item.listItem.classList.add('visible');
            } else {
                item.listItem.classList.remove('visible');
            }
        });

        // Specify the visible path or hide the path altogether
        // if there are no visible items
        if (visibleItems > 0 && pathStart < pathEnd) {
            if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
                tocPath.setAttribute('stroke-dashoffset', '1');
                tocPath.setAttribute('stroke-dasharray', '1, ' + pathStart + ', ' + (pathEnd - pathStart) + ', ' + pathLength);
                tocPath.setAttribute('opacity', 1);
            }
        } else {
            tocPath.setAttribute('opacity', 0);
        }

        lastPathStart = pathStart;
        lastPathEnd = pathEnd;
    }
})();

function goto(title) {
    console.log(title);
    window.location.href = "/w/" + title;
}

function updateList() {
    let text = input.value.toLowerCase();
    if (text.length > 0) searchState = 2;
    else searchState = 1;
    let res = search_data[text];
    if (res) {
        res = res.sort();
        res = res.slice(0, 10);
        if (list !== res) selected = null;
        list = res;

        let html = `<div class="search-result">`;
        for (let i = 0; i < list.length; i++) {
            if (selected === i) {
                html += `<div id="t-s-r-` + i + `" class="selected" onmouseenter="updateSelection(` + i + `);" onmouseleave="updateSelection(null);" onclick="goto('` + list[i] + `')">` + list[i] + `</div>`;
            } else {
                html += `<div id="t-s-r-` + i + `" onmouseenter="updateSelection(` + i + `);" onmouseleave="updateSelection(null);" onclick="goto('` + list[i] + `')">` + list[i] + `</div>`;
            }
        }
        html += `</div>`;
        result.classList.remove('hide');
        result.innerHTML = html;
    } else {
        list = [];
        result.classList.add('hide');
        result.innerHTML = '';
    }
}

function updateSelection(after) {
    if (selected === after) return;
    if (selected !== null) {
        let item = document.getElementById('t-s-r-' + selected);
        item.classList.remove('selected');
    }
    if (after !== null) {
        let item = document.getElementById('t-s-r-' + after);
        item.classList.add('selected');
    }
    selected = after;
}

function onKey(event, id, key, callback) {
    if (event.which === id || event.keyCode === id || event.key === key) {
        event.preventDefault();
        callback();
    }
}

function openSearchBox() {
    searchBox.classList.add('expand');
    setTimeout(function () {
        inputWrap.classList.remove('hide');
        if (input.value.length > 0) {
            result.classList.remove('hide');
        }
        input.focus();
    }, 210);
    searchState = 1;
}

function closeSearchBox() {
    searchBox.classList.remove('expand');
    input.blur();
    inputWrap.classList.add('hide');
    result.classList.add('hide');
    searchState = 0;
}

(function fetch_search_data() {
    let r = new XMLHttpRequest();
    r.open('GET', '/r/search.json');
    r.send();
    r.onload = function () {
        search_data = JSON.parse(r.response);
    };

    input.addEventListener('keydown', function (event) {
        onKey(event, 13, "Enter", function () {
            if (searchState === 2) {
                goto(list[selected || 0] || input.value);
            }
        });

        onKey(event, 40, "ArrowDown", function () {
            let after = selected;
            if (after === null) {
                after = 0;
            } else {
                after++;
            }
            if (after >= list.length) after = null;
            updateSelection(after);
        });

        onKey(event, 38, "ArrowUp", function () {
            let after = selected;
            if (after === null) {
                after = list.length - 1;
            } else {
                after--;
            }
            if (after < 0) after = null;
            updateSelection(after);
        })

        onKey(event, 27, "Escape", function () {
            input.blur();
        });
    });

    input.addEventListener('input', function () {
        updateList();
    });

    button.addEventListener('click', function () {
        if (searchState === 0) {
            openSearchBox();
        } else if (searchState === 1) {
            closeSearchBox();
        } else {
            goto(list[selected || 0] || input.value);
        }
    });
})();

document.addEventListener('keydown', function (event) {
    if (searchState === 0) {
        onKey(event, 191, "/", openSearchBox);
    } else {
        if (document.activeElement === input) {
            onKey(event, 191, "/", input.focus);
        } else {
            onKey(event, 27, "Escape", closeSearchBox);
        }
    }
});
