import api from '../config/api'

export async function addProfile(newProfile) {
    const response = await api.post("/", newProfile)
    console.log(response)
    return response.data
}

export async function deleteProfile(id) {
    const response = await api.delete(`/${id}`)
    return response.data
}

export async function updateProfile (profile) {
    const response = await api.put(`/${profile._id}`, profile)
    return response.data
}

