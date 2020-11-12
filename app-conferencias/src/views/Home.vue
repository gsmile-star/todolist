<template>
  <div class="home">
    <Cabecera></Cabecera>    
    <br>
    <img alt="Vue logo" src="../assets/logo.png">  
    <br><br><br>
    <Subtitulo></Subtitulo>
    <img alt="Vue img" src="../assets/img1.jpeg">           
    <Lista></Lista> 
    <br><br>   
    <img alt="Vue img" src="../assets/img2.jpeg">   
    <Muestra></Muestra>
    <br><br>
    <img alt="Vue img" src="../assets/img4.jpeg">  
  </div>
</template>

<script>
// @ is an alias to /src
import Cabecera from '@/components/Cabecera.vue'
import Subtitulo from '@/components/Subtitulo.vue'
import Muestra from '@/components/Muestra.vue'
import Lista from '@/components/Lista.vue'


export default {
  name: 'Home',
  components: {    
    Cabecera,
    Subtitulo,
    Muestra,
    Lista,     
  }
}
</script>
