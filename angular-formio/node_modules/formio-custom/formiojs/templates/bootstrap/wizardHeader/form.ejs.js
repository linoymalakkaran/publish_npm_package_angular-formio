Object.defineProperty(exports, "__esModule", {
  value: true,
});
let ejs = require("../../../../ejs/ejs");

//added new function by linoy
exports.default = function (ctx) {
  debugger;
  // let str = `<nav aria-label="navigation" id="<%= ctx.wizardKey %>-header">
  //               <ol class="pagination">
  //                 <%  ctx.panels.forEach(function(panel, index) { %>
  //                       <li class="page-item<%= ctx.currentPage === index ? ' active' : ''%>" style="">
  //                         <span class="page-link" ref="<%= ctx.wizardKey %>-link"> <%= ctx.t(panel.title) %> </span>
  //                       </li>
  //                   <% }) %>
  //               </ol>
  //             </nav>`;

  let str = `<nav aria-label="breadcrumb" id="<%= ctx.wizardKey %>-header">
                <ol class="breadcrumb">
                  <%  ctx.panels.forEach(function(panel, index) { %>
                        <li class="breadcrumb-item page-item<%= ctx.currentPage === index ? ' active' : ''%>" style="">
                          <a href="#" ref="<%= ctx.wizardKey %>-link"> <%= ctx.t(panel.title) %> </a>
                        </li>
                    <% }) %>
                </ol>
              </nav>`;

  let html = ejs.render(str, { ctx: ctx });
  return html;
};


// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default=function(ctx) {
// var __t, __p = '', __j = Array.prototype.join;
// function print() { __p += __j.call(arguments, '') }
// __p += '<nav aria-label="navigation" id="' +
// ((__t = ( ctx.wizardKey )) == null ? '' : __t) +
// '-header">\n  <ul class="pagination">\n    ';
//  ctx.panels.forEach(function(panel, index) { ;
// __p += '\n    <li class="page-item' +
// ((__t = (ctx.currentPage === index ? ' active' : '')) == null ? '' : __t) +
// '" style="">\n      <span class="page-link" ref="' +
// ((__t = (ctx.wizardKey)) == null ? '' : __t) +
// '-link">' +
// ((__t = (ctx.t(panel.title))) == null ? '' : __t) +
// '</span>\n    </li>\n    ';
//  }) ;
// __p += '\n  </ul>\n</nav>\n';
// return __p
// }