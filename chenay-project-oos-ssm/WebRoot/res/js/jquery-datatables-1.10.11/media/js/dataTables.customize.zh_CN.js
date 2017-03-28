(function($){
	$.extend(true, $.fn.DataTable.defaults.oLanguage,
		{
		    "sProcessing":   "正在加载数据...",
		    "sEmptyTable":   "表格中没有数据",
		    "sLoadingRecords":   "正在加载数据...",
		    "sLengthMenu":   "_MENU_ 记录/页",
		    "sZeroRecords":  "没有匹配的记录",
		    "sInfo":         "显示第 _START_ 至 _END_ 项记录，共 _TOTAL_ 项",
		    "sInfoEmpty":    "显示第 0 至 0 项记录，共 0 项",
		    "sInfoFiltered": "(由 _MAX_ 项记录过滤)",
		    "sInfoPostFix":  "",
		    "sSearch":       "过滤:",
		    "sUrl":          "",
		    "oPaginate": {
		        "sFirst":    "首页",
		        "sPrevious": "上页",
		        "sNext":     "下页",
		        "sLast":     "末页"
		    }
		});
})(jQuery);

