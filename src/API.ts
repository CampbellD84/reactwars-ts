import axios, { AxiosResponse } from 'axios'

const BaseURL: string = 'https://swapi.dev/api/'

export const getChars = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const characters: AxiosResponse<ApiDataType> = await axios.get(`${BaseURL}people`)
        return characters
    } catch (error) {
        throw new Error(error)
    }
}