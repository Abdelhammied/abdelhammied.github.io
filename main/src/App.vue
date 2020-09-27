<script>
// Components
import Card from "./components/Card";
import Info from "./components/Info";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// Mixins
import UserProfile from "./mixins/userProfile";

export default {
    mixins: [UserProfile],

    components: {
        Card,
        Info,
        Skills,
        Experience,
        Contact,
    },

    data() {
        return {
            components: [
                { title: "Info", active: true },
                { title: "Skills", active: false },
                { title: "Experience", active: false },
                { title: "Contact", active: false },
            ],

            currentComponent: "Info",
        };
    },

    methods: {
        handleComponentWasClicked(componentIndex) {
            this.components.map((component) => {
                component.active = false;
            });

            let clickedComponent = this.components[componentIndex];

            clickedComponent.active = true;
            this.currentComponent = clickedComponent.title;
        },
    },
};
</script>

<template>
    <div class="container app-container">
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <Card
                    :user="user"
                    :components="components"
                    @componentWasClicked="handleComponentWasClicked"
                />
            </div>
            <div class="col-md-8 col-sm-12">
                <component
                    :is="currentComponent"
                    @componentWasClicked="handleComponentWasClicked"
                ></component>
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-container {
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */

    font-family: "Raleway", sans-serif;
    padding-top: 5%;
}
</style>