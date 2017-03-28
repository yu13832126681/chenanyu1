<#assign arr1=[1,2,3,4,5] >

<#assign arr2=[3,4,5] >

<#list arr1 as ele>
	<!--${ele},${arr2?seq_contains(ele)?string("yes", "no")}-->
	<#if arr2?seq_contains(ele)==true>
		${ele},true
	</#if>
</#list>