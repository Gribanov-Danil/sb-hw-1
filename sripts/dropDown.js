let intervalId

const contains = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

export const dropdown = () => {
    document.querySelectorAll('.dropdown-toggle').forEach(e => {
        e.addEventListener('click', e => {
            const menu = e.currentTarget.dataset.path
            document.querySelectorAll('.dropdown-menu').forEach(e => {
                if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                    e.classList.remove('menu-active')
                    e.classList.remove('open')
                    document.querySelector(`[data-target=${menu}]`).classList.add('menu-active')
                    intervalId = setTimeout(() => {
                        document.querySelector(`[data-target=${menu}]`).classList.add('open')
                    }, 0)
                }

                window.onclick = e => {
                    let linkList = document.querySelectorAll(`[data-link-target=${menu}]`)
                    if (contains(linkList, e.target)  || e.target === document.querySelector(`[data-path=${menu}]`)) {
                    } else {
                        document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                        document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                    }
                }
            })
        })
    })
}
