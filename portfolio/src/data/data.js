import {  AcademicCapIcon, BookOpenIcon ,CodeBracketSquareIcon , BriefcaseIcon, FolderIcon, EnvelopeIcon  } from "@heroicons/react/24/solid";


export const itemsNav =[
    {
        id:1,
        icon: BookOpenIcon ,
        text: 'Sobre Mí',
        path: '/about'
    },
    {
        id:2,
        icon: AcademicCapIcon,
        text: 'Educación',
        path: '/education'
    },
    {
        id:3,
        icon: CodeBracketSquareIcon  ,
        text: 'Habilidades',
        path:'/skills'
    },
    {
        id:4,
        icon: BriefcaseIcon,
        text: 'Experiencia',
        path:'/experience'
    },
    {
        id:5,
        icon: FolderIcon ,
        text: 'Proyectos',
        path: '/projects'
    },
    {
        id:6,
        icon: EnvelopeIcon,
        text: 'Contacto',
        path: '/contact'
    }
]