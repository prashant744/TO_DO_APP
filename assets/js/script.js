let designcl = ['work','Personal','Claeaning','Otheres'] 
$(document).ready(function(){

    let categorys = document.getElementsByClassName('catesec');
        for(let i=0;i<categorys.length;i++){ 
            if(categorys[i].innerHTML.trim()=='Work'){ 
               categorys[i].classList.add(designcl[0])
               categorys[i].classList.add('commonClass')
            }
            else if(categorys[i].innerHTML.trim()=='Personal'){
                categorys[i].classList.add(designcl[1])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Claeaning'){
                categorys[i].classList.add(designcl[2])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Otheres'){
                categorys[i].classList.add(designcl[3])
                categorys[i].classList.add('commonClass')
            }
        }
});


function checkedOrNot(){ 
    let cb = document.querySelectorAll('.delechack'); 
    let descdisp = document.querySelectorAll('.dispdsc'); 
    let ddsp = document.querySelectorAll('.dueDate'); 
    for(let i=0;i<descdisp.length;i++){
        let dueDate = ddsp[i].innerHTML;
       
            if(cb[i].checked == true){ 
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'line-through'
            }
            else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'none'
        }
       
    } 
   
}


document.getElementById('deleteButton').addEventListener('click',function(){
    let checedvaluew = document.querySelectorAll('.delechack:checked')
    let arrcheck = [] 
    for(let i of checedvaluew){
        let gg=''
       gg= i.getAttribute('uid')    
        console.log(gg)
        arrcheck.push(gg);
    }
    if(arrcheck.length===0){ 
        console.log('no item is checked')
        swal("No item is checked!!", "please select item to remove!", "error"); 
        return;
    }
    
    $.ajax({
        type: 'post',
        url: '/delete_todo/?id='+arrcheck,
        success: function(){ 
            swal("Item is deleted ", "click ok to go back Home ", "success") 
            .then(redir => {
                window.location = '/';
            })
           
        },
        error: function(err){ 
            console.log(err);
        }

    });
})