(function (win) {
    win.utils = {
        // 将数据转换成a标签，然后放入到指定的位置
        // template:模板
        /*
        * selector: 指定将生成的a标签放置的位置
        * data:数据
        * */
        aTp: function (selector, data) {
            document.querySelector(selector).innerHTML = data.map(function (item) {
                return (
                    "<a href='" + item.url + "'>" + item.title + "</a>"
                )
            }).join("");
        },
        typeTp: function (selector, data) {
            document.querySelector(selector).innerHTML = data.map(function (item) {
                return (
                    "<div>" +
                    "<a href='" + item.url + "'>" + item.title + "</a>" +
                    "</div>"
                )
            }).join("");
        },
        // 帮助创建指定的元素，创建完成之后，放入到指定的位置。还可以在创建的同时增加属性。
        // tagName:创建元素的名称
        // appendNode:将创建的元素放入的位置
        // props:是一个对象用于设置创建元素相关的属性
        // 返回的值为创建的元素。
        createElementAppend: function (tagName, appendNode, props = {}) {
            var node = document.createElement(tagName);
            console.log(tagName,appendNode);
            appendNode.appendChild(node);
            for (var key in props) {
                node[key] = props[key];
            }
            return node;
        }
    }
})(window);