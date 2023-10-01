export async function getAllBrandsData() {
    let response = await fetch("https://agency.teamrabbil.com/api/BrandList");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getAllHeroData() {
    let response = await fetch("https://agency.teamrabbil.com/api/HeroList");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getAllWorkListData() {
    let response = await fetch("https://agency.teamrabbil.com/api/WorkList");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getAllStatisticData() {
    let response = await fetch("https://agency.teamrabbil.com/api/StatList");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getAllSocialLinkData() {
    let response = await fetch("https://agency.teamrabbil.com/api/SocialLink");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getAllTeamData() {
    let response = await fetch("https://agency.teamrabbil.com/api/TeamList");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getAllServicesData() {
    let response = await fetch("https://agency.teamrabbil.com/api/AllService");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getAllProjectData() {
    let response = await fetch("https://agency.teamrabbil.com/api/AllProject");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getAllTestimonialsData() {
    let response = await fetch("https://agency.teamrabbil.com/api/TestimonialList");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}

export async function getAllMetadataData() {
    let response = await fetch("https://agency.teamrabbil.com/api/SiteMeta/home");
    if (response.status !== 200) {
        throw new Error();
    }
    return response.json();
}