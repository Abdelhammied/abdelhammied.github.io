import React, { Component } from 'react';


class Skills extends Component {
    render() {
        const skills = [
            {            // Frontend Skills
                Frontend: [
                    { name: "HTML", percentage: 90 },
                    { name: "CSS", percentage: 85 },
                    { name: "Javascript", percentage: 87 },
                    { name: "jQuery", percentage: 70 },
                    { name: "Bootstrap", percentage: 85 },
                    { name: "Vuejs", percentage: 87 },
                ],
            },
            {
                // Backend Skills
                Backend: [
                    { name: "PHP", percentage: 90 },
                    { name: "Laravel", percentage: 90 },
                    { name: "MySQl", percentage: 85 },

                ]
            },

            {            // Other Skills
                Other: [
                    { name: "Git", percentage: 86 },
                    { name: "Server Management", percentage: 80 },
                    { name: "CICD-Process", percentage: 90 },
                ]
            },

            {            // Coding Skills
                Coding: [
                    { name: "OOP", percentage: 90 },
                    { name: "Design Patterns", percentage: 89 },
                    { name: "Clean Code", percentage: 92 },
                ]
            },
        ]


        return (
            <div>

            </div>
        )
    }
}


export default Skills