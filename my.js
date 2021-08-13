 function giai_phuong_trinh_bac_nhat() {
    var a, b;
    a = +document.getElementById('a').value;
    b = +document.getElementById('b').value;
    console.log(a);
    if(a == 0) {
        if(b == 0) {
            document.getElementById('result').innerHTML = 'Vo so nghiem';
        } else {
            document.getElementById('result').innerHTML = 'Vo nghiem';
        }
    } else {
        document.getElementById('result').innerHTML = "Nghiem x = " - b/a;
    }
 }


 function giai_phuong_trinh_bac_hai() {
        var a, b, c;
        a = +document.getElementById('a').value;
        b = +document.getElementById('b').value;
        c = +document.getElementById('c').value;
        if(a == 0) {
            if(b == 0) {
                if(c==0){
                document.getElementById('result').innerHTML = 'Vo so nghiem';
                } else {
                document.getElementById('result').innerHTML = 'Vo nghiem';
                }
            } else {
            document.getElementById('result').innerHTML = "Nghiem x = " - b/a;
            }
        } else {
            var delta = b*b - 4*a*c;
            if (delta < 0) {
                document.getElementById('result').innerHTML = 'Vo nghiem'; 
            
            } else if (delta = 0) {
                document.getElementById('result').innerHTML = 'Nghiem kep: x1 = x2 = ' -b/(2*a); 
            }    
            else {
                document.getElementById('result').innerHTML = 'Nghiem thu 1: x1 = ' + (-b+sqrt(delta))/(2*a) + 'Nghiem thu 2: x2 = '+ (-b-sqrt(delta))/(2*a);
        }
        }
    }
