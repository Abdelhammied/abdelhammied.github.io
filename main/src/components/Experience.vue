<script>
import experiences from "../experience.json";

export default {
    data() {
        return {
            experiences: experiences,
        };
    },
};
</script>

<template>
    <div class="row">
        <div
            class="col-md-12"
            v-for="(experience, key) in experiences"
            :key="key"
        >
            <a
                :href="experience.companyWebsite"
                v-text="experience.companyName"
            ></a>
            - <span v-text="experience.period"></span> - ( <span v-text="experience.jobType"></span> )
            <p v-text="experience.jobTitle"></p>
        </div>
    </div>
</template>