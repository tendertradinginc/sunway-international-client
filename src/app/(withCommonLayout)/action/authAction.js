"use server";
import { cookies } from "next/headers";
export async function signUpUser(pre, fromData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    console.log(formattedData);
    const res = await fetch(`http://localhost:5000/api/v1/users/createuser`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(pre, fromData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    console.log(formattedData);
    const res = await fetch(`http://localhost:5000/api/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      cookies().set("accessToken", data.data);
      return data;
    }
    return data;
  } catch (error) {
    throw error;
  }
}
