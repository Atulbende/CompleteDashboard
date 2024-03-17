import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-dt/js/dataTables.dataTables'
import "jquery-ui-dist/jquery-ui";
import '../dataTable/grid.css'
export default function Grid() {
    useEffect(() => {
      const data= [{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'},{'Pid':1,'CustomerName':'asdasd','MobileNo':'93434736425','Address':'Address32rweds'}];
            var table = $('#sampleTable').DataTable({ 'data': data, 'columns':  [
                { title : 'Pid',data:'Pid',render:(data,type)=>{
                  return  '<p class="link-primary" >'+  data+'0000000' +'</p>'}},
                { title : 'Customer Name',data:'CustomerName' },
                { title : 'Mobile No.',data:'MobileNo' },
                { title : 'Address',data:'Address' }
                ], destroy: true });
            ($('#sampleTable.dataTable').find('tbody')).on('click', 'tr td', function (event) {
                    $(this).parent().toggleClass('selected');
                    var cellDT = table.cell(this).index();
                    // var items = GetSelect();
                    // setId(items);
                    console.log(table.rows(this).data()[0]);
                    // if (cellDT) if (cellDT.column == 0) Navigate(props.Redirect, { state: { Data: table.rows(this).data()[0] } });
                  });
  
    }, []);
  return (
    <div className='tile-body table-responsive'>
        <table className='table dataTable table-striped  bg-red' id='sampleTable'>
        </table>
  </div>
  )
}
