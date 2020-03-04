arr=[];
i=1;
 let one=document.getElementById('name');
 let two=document.getElementById('ids');
let three=document.getElementById('phn');
document.getElementById('show_table').addEventListener('click',Display);
function Display()
{
    var pp={};
    pp.a1=one.value;
    pp.a2=two.value;
    pp.a3=three.value;
    arr.push(pp);
    document.getElementById('mytable').style.visibility='visible';
let rows='';
arr.forEach(obj=>
{
    const tr=`<tr>
    <td>${obj.a1}</td>
        <td>${obj.a2}</td>
        <td>${obj.a3}</td>
        </tr>`;
        rows+=tr;
        document.getElementById("hai").innerHTML=rows;
});
one.value="";
two.value="";
three.value="";
}
