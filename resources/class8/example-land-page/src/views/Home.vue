<template>
  <div class="home">
    <navigation></navigation>
    <div class="hero-box">
                <div class="hero-box-left">
                    <p class="large-text">Your trusted web developers, just a click away.</p>
                    <p class="medium-text">Meet our team of web dev experts ready to take on your biggest challenges and turn them into opportunities to outshine your competition. Connect with us today to get started.</p>
                </div>
                
                <div class="hero-box-right">
                    <form method="post" action="#">
                        <input-field unique="first_name" label="First Name"></input-field>
                        <input-field unique="last_name" label="Last Name"></input-field>
                        <input-field unique="email" label="Email"></input-field>
                        <div class="input-wrapper">
                            <button>Contact Us</button>
                        </div>
                    </form>
                </div>      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation";
import InputField from "@/components/InputField";

export default {
  name: "Home",
  components: {
    Navigation,
    InputField
  }
};
</script>

<style scoped>
body {
    background: #fff;
    color: #777;
}
.logo {
    color: #3d3d3d;
    display: flex;
}
.nav-wrapper {
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
}
.link-item {
    color: #555ae4;
    font-weight: bold;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 5px;
    position: relative;
}
.link-item:active,
.link-item:hover,
.link-active {
    background: #555ae4;
    color: #fff;
}
.sublinks {
    position: absolute;
    top: 40px;
    right: 10px;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    background: #3d3d3d;
    padding: 10px;
    border-radius: 5px;
}
.sublinks > a {
    color: #eee;
    width: 100px;
}
.hero-box {
    background: #f3f3ff;
    display: flex;
}
.hero-box-left {
    width: 400px;
    margin: 25px;
}
.hero-box-right {
    width: 100%;
    margin: 25px; 
}
.large-text {
    font-size: 25px;
    line-height: 1.5em;
}
.medium-text {
    margin-top: 10px;
}
.input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
.input-wrapper > label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
}
.input-wrapper > input {
    background: transparent;
    border: 1px solid #555ae4;
    border-radius: 5px;
    padding: 5px;
}
.input-wrapper > button {
    background: #555ae4;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
}
</style>
