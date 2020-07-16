function bill(){
  var items=document.getElementsByName('itm');
		var selectedItems=0;
		for(var i=0; i<items.length; i++){
			if(items[i].type=='checkbox' && items[i].checked==true)
				selectedItems+=Number(items[i].value);
		}
    var tip=selectedItems/10
    var t=selectedItems+tip
		document.getElementById('amt').innerHTML="Bill Amount = Rs."+selectedItems;
    document.getElementById('tips').innerHTML="Tips = Rs."+tip;
    document.getElementById('totamt').innerHTML="Total Amount = Rs."+t;
}
