<template>
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
</template>

<script>
    const InputField = require('../components/InputField');
    
    module.exports = {
        components: {
            InputField,
        }
    }
</script>