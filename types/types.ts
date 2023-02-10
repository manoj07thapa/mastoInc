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
    title: string
    subtitle?: string
    category: string
    files?: string[]
    price: number
    language: string
    tutor: string
    tutorWho: string
    relatedSkills: string[]
    youLearn: string[]
    duration: string
    framework: string
    reqKnowledge: string
    level: string
    time: string
    courseContent: SyllabusProps[]

}

export type PageWithLayout = NextPage & {
    getLayout: (page: ReactElement) => ReactNode

}