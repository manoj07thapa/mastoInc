import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"


export type UserProp = {
    username: string,
    attributes: {
        email: string,
        name: string,
        phone_number: string,
        sub: string
    },
    signInUserSession?: {
        accessToken?: {
            payload: {
                "cognito:groups": string[]
            }
        }
    }

}

export type SyllabusProps = {
    topic: string
    description: string
    duration: string
}

export type CourseProps = {
    id: string,
    title: string,
    subtitle?: string
    category: string
    images: string[]
    s3ImageUrl?: string[]
    price: number
    language: string
    tutor: string
    tutorWho: string
    relatedSkills: string[]
    courseObjectives: string[]
    duration: string
    framework: string
    prerequisites: string[]
    level: string
    time: string
    syllabus: SyllabusProps[]

}

export type ResourceProps = {
    title: string,
    subtitle: string,
    subtitle1?: string,
    subtitle2?: string,
    images?: File[],
    s3ImageKeys?: string[]
    s3ImageUrl?: string[]
    description: string,
    page: string,
    section: string,
}

export type PageWithLayout = NextPage & {
    getLayout: (page: ReactElement) => ReactNode

}


