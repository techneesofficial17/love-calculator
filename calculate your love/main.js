
const btn = document.querySelector('#send');
document.querySelector('#send').addEventListener('click',textcontent);
const progess = document.querySelector('.progess');


document.querySelector('#send').addEventListener('click', () => {   
    btn.style.display = 'none';
    btn.value = 'Wait 3 sec';
    btn.style.cursor = "none";
    document.querySelector('.loading').style.display = "block"; 
});


function textcontent() {
    const Ytext = document.querySelector('#Yname').value;
    const Ctext = document.querySelector('#Cname').value;
    let fy = Ytext.charAt(0);
    let cy = Ctext.charAt(0);
    console.log(fy);
    console.log(cy);
    getRandom();
    loading();
}

function getRandom() {
    const per = Math.floor(Math.random() * 11);
    perc = per * Math.floor(Math.random()* (11 - 5 ) + 5);
}

const YText = document.querySelector('#Yname').value; 
const CText = document.querySelector('#Cname').value; 

function loading() { 
    getRandom();
    var percent = 1;
    var perCount =  10;

        if (perCount == 200){        
            clearInterval();
        }else {
                setInterval( () => { 
                    
                    if(perCount <= 202){
                        perCount = perCount + 2;
                }else {
                    clearInterval();
                }
                    if(percent <= perc){
                        percent++;  
                        document.querySelector('.percent').textContent = percent + ' %';
                        document.querySelector('.progess').style.width = perCount + 'px';
                    }else {
                        
                        clearInterval();
                        document.querySelector('#complete').style.display = "block";
                        document.querySelector('.percent').classList.add('animation');
                        btn.style.display = 'block';
                        setTimeout(()=>{
                            location.reload();
                        }, 3000);
                    }
                },50);
                var percent = 1;
                var perCount =  10;
                document.querySelector('#complete').style.display = "none";
                document.querySelector('.progess').style.width = perCount + 'px';
                

            }
    
}