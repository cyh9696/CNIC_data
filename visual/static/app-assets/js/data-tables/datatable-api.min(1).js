!function(t,e,a){"use strict";a(e).ready(function(){function t(t){return'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;"><tr><td>Full name:</td><td>'+t.name+"</td></tr><tr><td>Extension number:</td><td>"+t.extn+"</td></tr><tr><td>Extra info:</td><td>And any further details here (images etc)...</td></tr></table>"}function e(){a(".search-api").DataTable().search(a("#global_filter").val(),a("#global_regex").prop("checked"),a("#global_smart").prop("checked")).draw()}function l(t){a(".search-api").DataTable().column(t).search(a("#col"+t+"_filter").val(),a("#col"+t+"_regex").prop("checked"),a("#col"+t+"_smart").prop("checked")).draw()}var o=a(".add-rows").DataTable(),n=1;a("#addRow").on("click",function(){o.row.add([n+".1",n+".2",n+".3",n+".4",n+".5"]).draw(!1),n++}),a("#addRow").trigger("click"),a(".text-inputs-searching tfoot th").each(function(){var t=a(this).text();a(this).html('<input type="text" placeholder="Search '+t+'" />')}),a(".text-inputs-searching").DataTable().columns().every(function(){var t=this;a("input",this.footer()).on("keyup change",function(){t.search()!==this.value&&t.search(this.value).draw()})}),a(".datatable-select-inputs").DataTable({initComplete:function(){this.api().columns().every(function(){var t=this,e=a('<select><option value="">Select option</option></select>').appendTo(a(t.footer()).empty()).on("change",function(){var e=a.fn.dataTable.util.escapeRegex(a(this).val());t.search(e?"^"+e+"$":"",!0,!1).draw()});t.data().unique().sort().each(function(t,a){e.append('<option value="'+t+'">'+t+"</option>")})})}});var i=a(".show-child-rows").DataTable({ajax:"../../app-assets/data/datatables/ajax-child-rows.json",columns:[{className:"details-control",orderable:!1,data:null,defaultContent:""},{data:"name"},{data:"position"},{data:"office"},{data:"salary"}],order:[[1,"asc"]]});a(".show-child-rows tbody").on("click","td.details-control",function(){var e=a(this).closest("tr"),l=i.row(e);l.child.isShown()?(l.child.hide(),e.removeClass("shown")):(l.child(t(l.data())).show(),e.addClass("shown"))});var c=a(".selection-multiple-rows").DataTable();a(".selection-multiple-rows tbody").on("click","tr",function(){a(this).toggleClass("selected")}),a("#row-count").on("click",function(){alert(c.rows(".selected").data().length+" row(s) selected")});var s=a(".selection-deletion-row").DataTable();a(".selection-deletion-row tbody").on("click","tr",function(){a(this).hasClass("selected")?a(this).removeClass("selected"):(s.$("tr.selected").removeClass("selected"),a(this).addClass("selected"))}),a("#delete-row").on("click",function(){s.row(".selected").remove().draw(!1)});var r=a(".submit-form-inputs").DataTable();a(".inputs-submin").on("click",function(){var t=r.$("input, select").serialize();return alert("The following data would have been submitted to the server: \n\n"+t.substr(0,120)+"..."),!1});var d=a(".hide-columns-dynamically").DataTable({scrollY:"200px",paging:!1});a("a.toggle-vis").on("click",function(t){t.preventDefault();var e=d.column(a(this).attr("data-column"));e.visible(!e.visible())}),a(".search-api").DataTable(),a("input.global_filter_search").on("keyup click",function(){e()}),a("input.column_filter_search").on("keyup click",function(){l(a(this).parents("tr").attr("data-column"))})})}(window,document,jQuery);