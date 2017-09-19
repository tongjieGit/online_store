<template>
 <div>
    <header class="header">
     	<div class="whole_div"> 
        <button id="chooseEat" @click="choose()">{{content}}</button>
        <p id="mainChoose">{{mainText}}</p>
        <p id="subChoose">{{subText}}</p>
        <p id="congratulations"></p>
      </div>
    </header>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Http from '../assets/lib/Http';
export default {
	 data() {
    return {
			content:"What to eat?",
			mainText: "",
			subText: "",
			times: 0,
    };
  },
   methods: {
    choose(){
			this.content = "Go on!";
			if (this.times === 0) {
				getMainMenu();
			}else{
				getSubMenu();
			}
		},
		getMainMenu(){
			this.times = 1;
			const tmpObj = {
        
      }
       Http({
          type: 'POST',
          url: "",
          data: JSON.stringify(tmpObj),
          complete: function(data) {
						this.mainText = "test1";
						console.log("success")
					},
          error: function(err) {
						console.log("error")
					},
      });
		},
		getSubMenu(){
			this.times = 2;
			this.content = "O啦";
			const tmpObj = {
        
      }
       Http({
          type: 'POST',
          url: "",
          data: JSON.stringify(tmpObj),
          complete: function(data) {
						this.subText = "test2";
						console.log("success")
					},
          error: function(err) {
						console.log("error")
					},
      });
		}
  }
}
</script>

<style  scoped>
body{
	margin:0px;
	padding: 0px;
	font-family: arial,"Microsoft Yahei",sans-serif;
}

.whole_div{
	width: 1200px;
	margin:0 auto;
}

#chooseEat{
	position: relative;
	color: rgba(255,255,255,1);
	text-decoration: none;
	background-color: rgba(219,87,5,1);
	font-family: 'Yanone Kaffeesatz';
	font-weight: 700;
	font-size: 26px;
	display: block;
	padding: 4px;
	border: none;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
	-webkit-box-shadow: 0px 9px 0px rgba(219,31,5,1), 0px 9px 25px rgba(0,0,0,.7);
	-moz-box-shadow: 0px 9px 0px rgba(219,31,5,1), 0px 9px 25px rgba(0,0,0,.7);
	box-shadow: 0px 9px 0px rgba(219,31,5,1), 0px 9px 25px rgba(0,0,0,.7);
	margin: 100px auto;
	width: 300px;
	text-align: center;
	height: 100px;
	-webkit-transition: all .1s ease;
	-moz-transition: all .1s ease;
	-ms-transition: all .1s ease;
	-o-transition: all .1s ease;
	transition: all .1s ease;
}

#chooseEat:active {
	-webkit-box-shadow: 0px 3px 0px rgba(219,31,5,1), 0px 3px 6px rgba(0,0,0,.9);
	-moz-box-shadow: 0px 3px 0px rgba(219,31,5,1), 0px 3px 6px rgba(0,0,0,.9);
	box-shadow: 0px 3px 0px rgba(219,31,5,1), 0px 3px 6px rgba(0,0,0,.9);
	position: relative;
	top: 6px;
}

#chooseEat:focus{
	outline: none;
}
p{
	width: 300px;
	height: 40px;
	font-size: 20px;
	color: rgba(0,0,0,1);
	display: block;
	margin: 0 auto;
}
</style>