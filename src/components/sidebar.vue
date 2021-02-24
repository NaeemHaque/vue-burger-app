<template>
<v-row class="primary">
  <div class="sidebar primary">
    <object  data="icon/menu.svg"></object>
    <div>
      <v-icon>facebook</v-icon>
    </div>
    <object  data="icon/logout.svg"></object>
  </div>
</v-row>
</template>

<script>
export default {

}
</script>

<style scopped>
.sidebar{
    overflow: hidden;
    justify-self:  left;
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.sidebar > div object{
margin-bottom: 2em;
}

.sidebar object{
    width:25px;
    height: 25px;
    margin: 1em;
    display: block;
}
</style>
