for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        document.body.innerHTML+=
        "<button data-x='"+i+"' data-y='"+j+"' class='k"+(i+""+j)+"'>.</button>";
    }
    document.body.innerHTML+="<br/>"
}
class kocka{
    akna = false;
    felfedve = false;
    szomszedszam = 0;
    szoveg=".";
    sor=0;
    oszlop=0;
    constructor(s,o) {
        this.sor=s;
        this.oszlop=o;
    }
    felfed=function(){
        if(this.akna==true){
            if(this.felfedve==false)
                alert("akna :(")
            this.szoveg="a";
        }
        else{
            if(this.szomszedszam>0){
                this.szoveg=""+this.szomszedszam;
            }
            else{
                this.szoveg=".";
            }
        }
        this.felfedve=true;
    }
}

palya=new Array();
function palyagenerator(){
    for(let i=0; i<10; i++){
        palya[i]=new Array();
        for(let j=0;j<10;j++){
            palya[i].push(new kocka(i,j));
        }
    }
}

function aknapakolo(){
    for(let i=0;i<10;i++){
        let x=Math.floor(Math.random() * 10);
        let y=Math.floor(Math.random() * 10);
        if(palya[x][y].akna==true){
            i--;
        }
        else{
            palya[x][y].akna=true;
            for(let j=-1;j<2;j++){
                for(let k=-1;k<2;k++){
                    if((k!=0||j!=0)&&palyanvane(x+j,y+k)==true)
                        palya[x+j][y+k].szomszedszam++;
                }
            }
        }

        
    }
}

function palyanvane(i,j){
    if(i<0||j<0){
        return false;
    }
    else if(i>9||j>9){
        return false;
    }
    else{
        return true;
    }
}
palyagenerator();
aknapakolo();
//tomb[2][3].felfed();
document.querySelectorAll("button").forEach(element => {
    element.addEventListener('click',function(){
        let x=parseInt(element.dataset.x);
        let y=parseInt(element.dataset.y);

        function felfedes(x,y){
            if(palya[x][y].szomszedszam==0&&palya[x][y].felfedve==false&&palya[x][y].akna==false){
                palya[x][y].felfed();
                document.querySelector(".k"+x+""+y).style.backgroundColor="green";
               /* for(i=-1;i<2;i++){
                    for(j=-1;j<2;j++){*/
                        /*let x2=x+i;
                        let y2=y+j;*/
                        if(palyanvane(x-1,y-1)==true&&palya[x-1][y-1].szomszedszam>0){
                            document.querySelector(".k"+(x-1)+""+(y-1)).style.backgroundColor="blue";
                            document.querySelector(".k"+(x-1)+""+(y-1)).innerText=palya[x-1][y-1].szomszedszam;
                        }
                        if(palyanvane(x-1,y)==true&&palya[x-1][y].szomszedszam>0){
                            document.querySelector(".k"+(x-1)+""+(y)).style.backgroundColor="blue";
                            document.querySelector(".k"+(x-1)+""+(y)).innerText=palya[x-1][y].szomszedszam;
                        }
                        if(palyanvane(x-1,y+1)==true&&palya[x-1][y+1].szomszedszam>0){
                            document.querySelector(".k"+(x-1)+""+(y+1)).style.backgroundColor="blue";
                            document.querySelector(".k"+(x-1)+""+(y+1)).innerText=palya[x-1][y+1].szomszedszam;
                        }
                        if(palyanvane(x,y-1)==true&&palya[x][y-1].szomszedszam>0){
                            document.querySelector(".k"+(x)+""+(y-1)).style.backgroundColor="blue";
                            document.querySelector(".k"+(x)+""+(y-1)).innerText=palya[x][y-1].szomszedszam;
                        }
                        if(palyanvane(x,y+1)==true&&palya[x][y+1].szomszedszam>0){
                            document.querySelector(".k"+(x)+""+(y+1)).style.backgroundColor="blue";
                            document.querySelector(".k"+(x)+""+(y+1)).innerText=palya[x][y+1].szomszedszam;
                        }
                        if(palyanvane(x+1,y-1)==true&&palya[x+1][y-1].szomszedszam>0){
                            document.querySelector(".k"+(x+1)+""+(y-1)).style.backgroundColor="blue";
                            document.querySelector(".k"+(x+1)+""+(y-1)).innerText=palya[x+1][y-1].szomszedszam;
                        }
                        if(palyanvane(x+1,y)==true&&palya[x+1][y].szomszedszam>0){
                            document.querySelector(".k"+(x+1)+""+(y)).style.backgroundColor="blue";
                            document.querySelector(".k"+(x+1)+""+(y)).innerText=palya[x+1][y].szomszedszam;
                        }
                        if(palyanvane(x+1,y+1)==true&&palya[x+1][y+1].szomszedszam>0){
                            document.querySelector(".k"+(x+1)+""+(y+1)).style.backgroundColor="blue";
                            document.querySelector(".k"+(x+1)+""+(y+1)).innerText=palya[x+1][y+1].szomszedszam;
                        }
                   /* }
                }*/
                /*for(i=-1;i<2;i++){
                    for(j=-1;j<2;j++){
                        let x2=x+i;
                        let y2=y+j;
                        if(palyanvane(x2,y2)==true){
                            felfedes(x2,y2);
                        }
                    }
                }*/
                if(palyanvane(x-1,y-1)==true){
                    felfedes(x-1,y-1);
                }
                if(palyanvane(x-1,y)==true){
                    felfedes(x-1,y);
                }
                if(palyanvane(x-1,y+1)==true){
                    felfedes(x-1,y+1);
                }
                if(palyanvane(x,y-1)==true){
                    felfedes(x,y-1);
                }
                if(palyanvane(x,y+1)==true){
                    felfedes(x,y+1);
                }
                if(palyanvane(x+1,y-1)==true){
                    felfedes(x+1,y-1);
                }
                if(palyanvane(x+1,y)==true){
                    felfedes(x+1,y);
                }
                if(palyanvane(x+1,y+1)==true){
                    felfedes(x+1,y+1);
                }
                
                
            }
            
        }
        felfedes(x,y);
        if(palya[x][y].felfedve==false&&palya[x][y].akna==false){
            palya[x][y].felfed();
            document.querySelector(".k"+x+""+y).style.backgroundColor="blue";
            document.querySelector(".k"+x+""+y).innerText=palya[x][y].szoveg;
        }
        else if(palya[x][y].felfedve==false&&palya[x][y].akna==true){
            document.querySelector(".k"+x+""+y).style.backgroundColor="red";
        }
    });
});