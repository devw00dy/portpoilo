
       $(function(){
           
           
           //탭메뉴 시작
           $("div.content .con1 h2").click(function(){
               
               $("div.content .con1 h2").removeClass("on");
               $(this).addClass("on");
               
               $("div.content .con1 ul").removeClass("on");
               $(this).next("ul").addClass("on");
               
           });
           
           //레이어 팝업 시작
           $("ul.notice li").eq(0).click(function(){
               $(".modal").fadeIn();
           });
           
                    
           $("button").click(function(){
               $(".modal").fadeOut();
           });           
           
           
           
       }); 
