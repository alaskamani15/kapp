var kapp = {
	version: 0,
	
	mobile: false,
	
	getVersion: function() {
		return kapp.version;
	},
    
    getTitle: function(){
        return document.getElementById("k-title-text").innerHTML;
    },

    /**
    * Returns the title that was required to be inserted.
    */

    setTitle: function(title){
        document.getElementById("k-title-text").innerHTML = title;
        return title;
    },
    
    menuIconClicked: function(){
        //Open the menu
        document.getElementById("k-nav").style.left = "0px";
	    
	    var blur = 5;
	    if (kapp.mobile) {
		    blur = 0;
	    }
	    
        document.getElementById("k-content").style.filter = "blur(" + blur + "px)";
        document.getElementById("k-content").style.webkitFilter = "blur(" + blur + "px)";
        
        document.getElementById("k-content").addEventListener("click", function(){
            //Close the menu
            document.getElementById("k-nav").style.left = "-20em";
            document.getElementById("k-content").style.filter = "blur(0px)";
        document.getElementById("k-content").style.webkitFilter = "blur(0px)";
        }, false);
        
    },
    
    bodyClicked: function(e){
        var x = e.pageX;
        var y = e.pageY;
        var circ = document.createElement("DIV");
        document.body.appendChild(circ);
        circ.className = "k-private-mouse-click";
        
        circ.style.left = (x - circ.offsetWidth/2) + "px";
        circ.style.top = (y - circ.offsetHeight/2) + "px";
        
        document.body.addEventListener("mouseup", function(){
            circ.style.opacity = 0;
            circ.style.transform = "scale(1.5)";
            setTimeout(function(){
                try {
                    document.body.removeChild(circ);
                } catch (e) {
                    //FIXME
                }
            }, 500);
            document.body.click();
        }, false);
    },
    
    addResponsive: function(element, type) {
        switch(type.toUpperCase()) {
                
            case "ID": 
                var trans = document.getElementById(element).style.transition;
                
                document.getElementById(element).addEventListener("mousedown", function(){
                    document.getElementById(element).style.transition = ".25s all ease-in-out";
                    document.getElementById(element).style.boxShadow = "0 0 20px 2px grey";
                }, false);
                
                document.getElementById(element).addEventListener("mouseup", function(){
                    document.getElementById(element).style.boxShadow = "0 0 0px 0px grey";
                }, false);
                break;
            case "CLASS":
                break;
            default:
                throw "Unknown type - use ID or CLASS"
                break;
        }
    },
    
    isMobile: function(){
        var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }, 
	
    makeDialog: function (title, content, t, f, neutral, callback) {
     document.getElementById("k-internal-dialog-placeholder").style.opacity = 1;
     document.getElementById("k-internal-dialog-title").innerHTML = title;
     document.getElementById("k-internal-dialog-content").innerHTML = content;
     document.getElementById("k-internal-dialog-button-neutral").innerHTML = neutral;
     document.getElementById("k-internal-dialog-button-false").innerHTML = f;
     document.getElementById("k-internal-dialog-button-true").innerHTML = t;
	    
     document.body.style.overflow = "hidden"; 

     document.getElementById("k-internal-dialog-button-neutral").addEventListener("click", function(){
        document.body.style.overflow = "auto";
	     document.getElementById("k-internal-dialog-placeholder").style.opacity = 0;
       callback("NEUTRAL");
     });

     document.getElementById("k-internal-dialog-button-false").addEventListener("click", function(){
	     document.body.style.overflow = "auto"; 
	     document.getElementById("k-internal-dialog-placeholder").style.opacity = 0;
	     callback(false);
     });

     document.getElementById("k-internal-dialog-button-true").addEventListener("click", function(){
             document.body.style.overflow = "auto"; 
	     document.getElementById("k-internal-dialog-placeholder").style.opacity = 0;
	     callback(true);
     });
   }
}

document.getElementById("k-icon").addEventListener("click", kapp.menuIconClicked, false);
document.body.addEventListener("mousedown", kapp.bodyClicked, false);
if (kapp.isMobile()) {document.getElementById("k-nav").style.width = "18em"; kapp.mobile = true;}

//Programming features here
kapp.setTitle("Demo");
kapp.addResponsive("warn", "id");
kapp.makeDialog("Welcome back!", "It's great to see you again!", "Greetings!", "...?", "Learn more", function(res) {
      alert(res);
   }
);
