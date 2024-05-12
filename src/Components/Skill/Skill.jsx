import React from 'react'
import DevSkill from './DevSkill'
function Skill() {
    const skills = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEO8V5p66e8ZCsawPLEUAd-4mwRhY-W49ZLxIZYSvkig&s",
            name: "React Js",
            percentage: "69"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGjaoi1IeThckiyEOoxwXwZaanotcWOMkB3hf3-NyDg&s",
            name: "Javascript",
            percentage: "75"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsRhbmrQNJJKf5vPMqB73M0tEYONnmxAFXijTMNZp8Q&s",
            name: "Node Js",
            percentage: "75"
        }, {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
            name: "CSS",
            percentage: "70"
        }, {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png",
            name: "HTML",
            percentage: "80"
        }, {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2mxb8sNOyqyq97uPglUAjuf7RE09y6WRGZX46mwb_w&s",
            name: "MongoDB",
            percentage: "50"
        }, {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0NT_K3DtnSabAHMppiHke2_HLVVDFfbpss0UX2KPuw&s",
            name: "Redux",
            percentage: "50"
        }, {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Sa6Ijlc16SEQFR9g249ZMTmM5dn-yuJaO9ISzNXgUA&s",
            name: "Git & GitHub",
            percentage: "80"
        }, {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXnzIfc07U50vFQlAAOzxnMIe_dJcdO_oyYHj72_1zA&s",
            name: "DBMS",
            percentage: "50"
        },
        {
            img: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
            name: "SQl",
            percentage: "60"
        },
    ]
    
    
    return (
        <div className='text-white h-screen w-full'>
            <h1 className=' text-6xl text-center  text-slate-400 tracking-widest leading-4 '>Skill</h1>
            <div className="div flex h-auto ml-24  flex-wrap w-1/2 gap-5 px-5 ">
                {
                    skills?.map((items, index) => {
                        return <DevSkill key={index} logo={items.img} name={items.name} percentage={items.percentage} />
                    })
                }
            </div>

        </div>
    )
}

export default Skill