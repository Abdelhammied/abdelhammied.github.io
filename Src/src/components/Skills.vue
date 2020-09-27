<script>
import skills from "../skills.json";

export default {
    data() {
        return {
            skills: skills,
        };
    },
};
</script>

<template>
    <div>
        <div
            class="skill-group"
            v-for="(key, skillsIndex) of skills"
            :key="`${key}-${skillsIndex}`"
        >
            <h4 class="skill-group-title" v-text="Object.keys(key)[0]"></h4>

            <ul class="list-group list-group-horizontal">
                <li
                    v-for="(skill, index) in skills[skillsIndex][
                        Object.keys(key)[0]
                    ]"
                    :key="index"
                    class="row list-group-item d-flex justify-content-between align-items-center"
                >
                    <div class="col-md-4">
                        <p v-text="skill.name"></p>
                    </div>
                    <div class="col-md-8">
                        <!-- <Progress :value="skill.percentage" /> -->
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.skill-group {
    margin-bottom: 20px;
}

.skill-group-title {
    letter-spacing: 2px;
    font-weight: 600;
}

p {
    margin-bottom: 0px;
}

.list-group-item:hover {
    background: #007bff;
    cursor: text;
    color: white;
}
</style>