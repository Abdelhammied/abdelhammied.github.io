<script>
export default {
    props: ["user", "components"],
};
</script>

<template>
    <div class="card">
        <img :src="user.avatar_url" class="card-img-top" :alt="user.bio" />

        <div class="card-body">
            <!-- Profile Info -->
            <h5 class="card-title" v-text="user.name"></h5>
            <p class="card-text" v-text="user.bio"></p>

            <!-- Components -->
            <div class="list-group">
                <a
                    v-for="(component, index) in components"
                    :key="index"
                    href="#"
                    @click="$emit('componentWasClicked', index)"
                    class="list-group-item list-group-item-action"
                    :class="component.active ? 'active' : ''"
                >
                    {{ component.title }}
                </a>
            </div>
        </div>
    </div>
</template>


<style scoped>
.card {
    box-shadow: 0px 2px 0px #666;
}

.list-group-item {
    border-right: 0;
    border-left: 0;
}

.card-title {
    font-weight: 600;
    letter-spacing: 2px;
}

.card-text {
    font-weight: 400;
    letter-spacing: 2px;
}
 
.active {
    font-weight: 600;
}
</style>