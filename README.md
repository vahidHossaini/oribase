

#Install
- origamicore [Doc](https://github.com/vahidHossaini/origami#readme)
#Config	

	   {
    		drivers:
            [
    			 {name:'global'},
                 {name:'web' }
    		]
	   }
	
	
		global.web
			.get(url,func)
			.post(url,data,func) 

		global.ori
            .Random(min,max)
            .RandomText(length=5)