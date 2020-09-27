<script>
export default {};
</script>

<template>
    <div>
        <hr />
        <h3>Welcome</h3>
        <hr />

        <p class="welcome">
            Welcome To My Website, if you are looking for a talented software
            developer that can take your application to the next level i might
            know some
            <a href="#" @click.prevent="$emit('componentWasClicked', 3)">one</a>
            who can help You.
        </p>

        <hr />

        <h3 class="info-title">About Me</h3>

        <hr />

        <p class="info">
            i'm abdelhammied elsayed senior full stack developer. <br />
            <br />

            with high

            <a href="#" @click.prevent="$emit('componentWasClicked', 1)">
                skills
            </a>

            at writing scaleable projects and modules using
            <a href="https://www.php.net">php</a>,
            <a href="https://www.laravel.com">laravel</a>,
            <a href="https://www.vuejs.org">vuejs</a>.

            <br />
            <br />

            With +5 Years of
            <a href="#" @click.prevent="$emit('componentWasClicked', 2)">
                experience
            </a>
            and more than 5 large scale live projects. you might git more
            confident to

            <a href="#" @click.prevent="$emit('componentWasClicked', 3)">
                hire me up
            </a>
        </p>
    </div>
</template>

<style scoped>
.welcome {
    font-size: large;
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 3px;
}

.info {
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 25px;
    text-transform: capitalize;
}
</style>