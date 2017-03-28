(function($) {
	var options = {
		"sPaginationType" : "full_numbers",
		"sDom" : '<"H"if>t<"F"if>',
		"iDisplayLength": 10,
		"bAutoWith" : false,// 自动调整表格宽度
		"bProcessing" : true,// 在初始化加载数据时，是否显示进度条
		"bServerSide":true,//设置服务端
		"bPaginate" : true, // 开关，是否显示分页器
		"bInfo" : true, // 开关，是否显示表格的一些信息
		"bFilter" : true, // 开关，是否启用客户端过滤器
		"sDom" : "<>lfrtip<>",
		"bDeferRender" : false,
		"bJQueryUI" : false, // 开关，是否启用JQueryUI风格
		"bLengthChange" : true, // 开关，是否显示每页大小的下拉框
		"bScrollInfinite" : false,// 是否显示滚动条
		"sScrollY" : "400px", // 是否开启垂直滚动，以及指定滚动区域大小,可设值：'disabled','2000px'
		"bSort" : true, // 开关，是否启用各列具有按列排序的功能
		"bSortClasses" : true,
		"bStateSave" : false, // 开关，是否打开客户端状态记录功能。这个数据是记录在cookies中的，
		// 打开了这个记录后，即使刷新一次页面，或重新打开浏览器，之前的状态都是保存下来的-
		// ------当值为true时aoColumnDefs不能隐藏列
		"sScrollX" : "50%", // 是否开启水平滚动，以及指定滚动区域大小,可设值：'disabled','2000%'
		"aoColumnDefs" : [ {
			"bVisible" : false,
			"aTargets" : [ 0 ]
		} ],// 隐藏列
		"aaSorting" : [ [ 0, "asc" ] ]
	};
	$.extend(true, $.fn.DataTable.defaults, options);
	
    $.fn.dataTableExt.oApi.fnReloadAjax = function ( oSettings, sNewSource, fnCallback, bStandingRedraw )
    {

        if ( sNewSource !== undefined && sNewSource !== null ) {
            oSettings.sAjaxSource = sNewSource;
        }


        // Server-side processing should just call fnDraw

        if ( oSettings.oFeatures.bServerSide ) {

            this.fnDraw();

            return;

        }


        this.oApi._fnProcessingDisplay( oSettings, true );

        var that = this;

        var iStart = oSettings._iDisplayStart;

        var aData = [];


        this.oApi._fnServerParams( oSettings, aData );


        oSettings.fnServerData.call( oSettings.oInstance, oSettings.sAjaxSource, aData, function(json) {

            /* Clear the old information from the table */

            that.oApi._fnClearTable( oSettings );


            /* Got the data - add it to the table */

            var aData =  (oSettings.sAjaxDataProp !== "") ?

                that.oApi._fnGetObjectDataFn( oSettings.sAjaxDataProp )( json ) : json;


            for ( var i=0 ; i<aData.length ; i++ )

            {

                that.oApi._fnAddData( oSettings, aData[i] );

            }


            oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();


            that.fnDraw();


            if ( bStandingRedraw === true )

            {

                oSettings._iDisplayStart = iStart;

                that.oApi._fnCalculateEnd( oSettings );

                that.fnDraw( false );

            }


            that.oApi._fnProcessingDisplay( oSettings, false );


            /* Callback user function - for event handlers etc */

            if ( typeof fnCallback == 'function' && fnCallback !== null )

            {

                fnCallback( oSettings );

            }

        }, oSettings );

    };
})(jQuery);
