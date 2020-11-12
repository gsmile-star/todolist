<template>
  <div class=" ">   

    <h1>{{ msg }}</h1>
    <section>
      <br><br><br>
      <h4 class="text-secondary">
        Everything your distributed team needs to get more done
      </h4>
      <br><br>
    </section>
<div class="row" style="justify-content: center">
        <div class="card col-md-2 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="@/assets/ideas2.svg" />
                    <div class="shadow"></div>
                    <div class="card-title"> Ideas </div>                    
                </div>
            </div>
        </div>
        <div class="card col-md-2 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="@/assets/content.svg" />
                    <div class="card-title"> Content </div>                    
                </div>
            </div>
        </div>
        <div class="card col-md-2 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="@/assets/conversations.svg" />
                    <div class="card-title"> Conversations </div>
                </div>
            </div>
        </div>

         <div class="card col-md-2 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="@/assets/tasks.svg" />
                    <div class="card-title"> Tasks </div>
                </div>
            </div>
        </div>

         <div class="card col-md-2 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="@/assets/people.svg" />
                    <div class="card-title"> People </div>
                </div>
            </div>
        </div>

         <div class="card col-md-2 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="@/assets/plans.svg" />
                    <div class="card-title"> Projects </div>
                </div>
            </div>
        </div>
    </div>

    
    <section>
      <br>
      <br>
      <br>
      <br>
    </section>

    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6" style="background-color: #7cc5f8">
            <br>
            <br>

            
            <img
              class="rounded mx-auto d-block"
              src="@/assets/todo.png"
              alt="Card image cap"
              width="250 px"
              height="300 px"
            /> <br><br>
            <h2> <font color="white"> A better way to organize your work</font></h2> 
            <br> <br> 
            <p>Capture your ideas and tasks as cards on a project board <br>
              that you can customize to get the perfect workflow.</p>
              <br><br> <br>

              <button type="button" class="btn btn-outline-light"> LEARN MORE</button>
              <br><br><br>
          </div>

          <div class="col-lg-6" style="background-color: rgba(0, 0, 0, 0.87)">
            <br><br><br>
            <img
              class="rounded mx-auto d-block"
              src="@/assets/chat.png"
              alt="Card image cap"
              width="350 px"
              height="250 px"
            />
            <br><br><br>
            <h2><font color= "white">A smarter alternative to email</font></h2>
            <br><br>
            <p><font color="white">Chat is built into cards and boards, which means <br>
            your conversations are automatically synched with your work.</font></p>
            <br><br> <br>

              <button type="button" class="btn btn-outline-light"> LEARN MORE</button>
              <br><br><br>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-fluid">
        <div>
          <div style="background-color: #b91c52">
            <br><br>
            <h1> <font color="white"> Stay in the loop, even when you are out of the room </font></h1> <br>
            <h4><font color="white">Smart highlights let you see at a glance what's new, and what's different</font></h4><br><br><br>

            <img
              class="rounded mx-auto d-block"
              style=""
              src="@/assets/cards.png"
              alt="Card image cap"
            />
            <br><br><br><br>
            <button type="button" class="btn btn-outline-light"> LEARN MORE</button>
              <br><br><br>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-fluid">
        <div>
          <div style="background-color: #f8981d">
            <br><br>
            <h1> <font color="white"> All your content, in one place </font></h1> <br>
            <h4><font color="white">Anything from your laptop, anything from the Web. And it's all integrated with your tasks and conversations</font></h4><br><br><br>
            <img
              class="rounded mx-auto d-block"
              src="@/assets/contentcards.png"
              alt="Card image cap"
              width="450 px"
              height="500 px"
            />
            <br><br><br><br>
            <button type="button" class="btn btn-outline-light"> LEARN MORE</button>
              <br><br><br>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  name: "Botonera",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
head,
body {
    background-color: lightcyan
}

.card {
    cursor: pointer
}

.hd {
    font-size: 25px;
    font-weight: 550
}

.card.hover,
.card:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, .2)
}

.img {
    margin-bottom: 35px;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222)
}

.card-title {
    font-weight: 600
}

button.focus,
button:focus {
    outline: 0;
    box-shadow: none !important
}

.ft {
    margin-top: 25px
}

.chk {
    margin-bottom: 5px
}

.rck {
    margin-top: 20px;
    padding-bottom: 15px
}

.h2 {
  background-color: white;
}

</style>

