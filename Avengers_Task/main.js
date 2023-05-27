
$(document).ready(function(){
        var modal=
            {
            admin_is_logged:false,
            current_Avenger:null,
            avengers:[
                {
                name:'black widow',
                 image_url:'https://th.bing.com/th/id/OIP.eoEFGYNU3_2PjaYPnzYp6gHaLH?pid=ImgDet&rs=1',
                 count:0,

                },
                {
                    name:'hulk',
                    image_url:'https://th.bing.com/th/id/OIP.Af-YNy5F7bb7KJfbE6lM-gHaKo?pid=ImgDet&rs=1',
                    count:0,
   
                },
                {
                    name:'captain america',
                    image_url:'https://th.bing.com/th/id/R.3aaee56356af4bd64bcafba57b4f5bfc?rik=sGt%2bFt24HCt6jQ&pid=ImgRaw&r=0',
                    count:0,
   
                },
                
            ],
            setCurrentavenger(avenger){
                
                this.current_Avenger=avenger;
                if (this.current_Avenger==null){
                    this.current_Avenger=this.avengers[0];
                }
            },
            getCurrentavenger(){
                return this.current_Avenger;
            }

            };


           var  controller={
            init:function () {
                modal.setCurrentavenger();
                view.render();
            },
            changeAvenger:function(avenger) {
                modal.setCurrentavenger(avenger);
                view.render();            
            },
            incrementcount:function (avenger) {
                avenger.count ++;
                view.render();
            },
            admin_login:function () {
                var flag=modal.admin_is_logged;
                modal.admin_is_logged=!flag;
           
                view.render();
            },
            changeAvenger_values:function (x,y,z) {
                modal.current_Avenger.name=x;
                modal.current_Avenger.image_url=y;
                modal.current_Avenger.count=z;
                this.admin_login();
                

            }


           }
           var view={
            current_Aveng:modal.current_Avenger,
            
            render:function () {
                 var l=modal.avengers;
                 var list=$('#list');
                 list.empty();
                for (let index = 0; index < l.length; index++) {
                    
                    var list_item=$('<li></li>');
                    list_item.addClass('img_container');
                    var list_image=$('<img />');
                    list_image.attr('src',modal.avengers[index].image_url);
                    list_image.addClass('img-fluid');
                    list_item.append(list_image);
                    list.append(list_item);
                    list_item.on("click", function(){
                      controller.changeAvenger(modal.avengers[index]);
                    })
                    

                }
               
                var selected_avenger=$('#current_avenger');
           
             
                selected_avenger.attr('src',modal.current_Avenger.image_url);
                var count=$('#count');
                var name=$('#name');
                name.text(modal.current_Avenger.name);
                count.text(modal.current_Avenger.count);
                var admin_area=$('#admin');
                var name_input=$('<input />');
                var url_input=$('<input />');
                var count_input=$('<input />');
                if(modal.admin_is_logged ==true){
                    
                   
                    admin_area.empty();

                    var input_text=$('<h6></h6');
                    input_text.text('Avenger Name :');
                    input_text.addClass('pb-2 pt-2');
                  
                    name_input.val(modal.current_Avenger.name);

                    var url_text=$('<h6></h6');
                    url_text.text('Avenger url :');
                    url_text.addClass('pb-2 pt-2');
                  
                    url_input.val(modal.current_Avenger.image_url);

                    var count_text=$('<h6></h6');
                    count_text.text('Avenger count :');
                    count_text.addClass('pb-2 pt-2');
                  
                    count_input.val(modal.current_Avenger.count);

                    var btn_area=$('<div></div>');
                    btn_area.addClass('d-flex align-items-center pt-3');

                    var save_btn=$('<button></button');
                    save_btn.addClass('mr-20');
                    save_btn.text("Save");

                    var cancel_btn=$('<button></button');
                    cancel_btn.text("Cancel");

                    btn_area.append(save_btn).append(cancel_btn);

                    admin_area.append(input_text).append(name_input).append(url_text).append(url_input).append(count_text).append(count_input).append(btn_area);
                    cancel_btn.on("click", function(){
                     controller.admin_login();
                       });
                       
                    
                      

                    save_btn.on("click", function(){
                        var x=name_input.val();
                        var y=url_input.val();
                        var z=count_input.val();
                       controller.changeAvenger_values(x,y,z);
                          });


                }
                else{
                    admin_area.empty();
                }
            },
            increment:$('#current_avenger').on("click", function(){
                controller.incrementcount(modal.current_Avenger);
               }),
            admin: $('#admin_btn').on("click", function(){
                 controller.admin_login();
               }),  
            
           }
           controller.init();
    });

