const BaseURl = 'https://api.summitegypt.com';
const AdminBaseURl = `${BaseURl}/accounts/admins`;
const AreaBaseURl = `${BaseURl}/Areas`;
const RegionBaseURl = `${BaseURl}/Regions`;
const ApartmentBaseURl = `${BaseURl}/Apartments`;
const UserBaseURl = `${BaseURl}/accounts/clients`;
export default class ApiCalling {


  /////////////////////////// Payment /////////////////////////
  
    /**
     * this function to to pay for apartment
     * @param {number} apartmentId
     * @returns {link} // you have to redirect the user to payment page with this link
     * 
     * */
    static async payForApartment(apartmentId) {
        const response = await fetch(`${BaseURl}/payments/${apartmentId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        
        return response;
    }
  /////////////////////////// login ///////////////////////////
    /** 
     * this function help you to login user
     * @param {object} user
     * take user object like this {
        "EmailOrPhone": "abdumezar1@gmail.com", // Email Or Phone Number Or UserName
        "Password": "01140267118",
        "RemeberMe" : 0
        }
     * @returns {object}
     */
        static async loginUser(user) {
            const response = await fetch(`${UserBaseURl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
    
            }).then(response => response.json())
            
            return response;
        }

    /** 
     * this function help you to register user
     * @param {object} user
     * take user object like this {
        "FirstName" : "Ahmed",
        "LastName" : "Ali",
        "PhoneNumber" : "01125254789",
        "Email" : "abdumezar@gmail.com",
        "Gender" : "M",
        "Address" : "Fayoum",
        "Password": "user123"
        }
     * @returns {object}
     */
        static async registerUser(user) {
            const response = await fetch(`${UserBaseURl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
    
            }).then(response => response.json())
            
            return response;
        }
      /////////////////// verify Account ///////////////////////////
    /**
     * this function send OTP to admin email
     * @param {string} token
     * @returns {object}
     * */

    static async sendOTPToUserEmail(token) {
        const response = await fetch(`${BaseURl}/accounts/SendOTPConfirmAccount`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(response => response.json())
        
        return response;
    };
    /**
     * this function to confirm OTP
     * @param {string} OTP
     * @param {string} token
     * @returns {object}
     *  
     */
    static async confirmOTP(token, OTP) {
        const response = await fetch(`${BaseURl}/accounts/ConfirmAccountOTP?otp=${OTP}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(response => response.json())
        
        return response;
    };
    ////////////////// General ///////////////////////////
    /**
     * check if the user is exist or not
     * @param {string} token 
     * @returns boolean
     */
    static async checkUser(token) {

        try {
            let resultReturned;
            await fetch(`${BaseURl}/accounts/validateToken?token=${token}`)
                .then(response => response.json())
                .then(result => resultReturned = result);
            return resultReturned;
        } catch (error) {
            return false;
        }

    }
    /**
     * this function get user info 
     * @param {string} token
     * @returns {object}
    */
    static async getUserInfo(token) {

        const response = await fetch(`${BaseURl}/accounts/currentuser`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(response => response.json())
        
        return response;
    }
    /////////////////////////// Admin ///////////////////////////
    /** 
     * this function help you to login admin
     * @param {object} user
     * take user object like this {
        "EmailOrPhone": "abdumezar1@gmail.com", // Email Or Phone Number Or UserName
        "Password": "01140267118",
        "RemeberMe" : 0
        }
     * @returns {object}
     */
    static async loginAdmin(user) {
        const response = await fetch(`${AdminBaseURl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        }).then(response => response.json())
        
        return response;
    }
    /**
     * this function help change admin password
     * @param {object} user
     * take user object like this {
        "current_password" : "User123",
        "new_password" : "user123"
        }
        * @param {string} token
        * @returns {object}
        */
    static async changeAdminPassword(user, token) {
        const response = await fetch(`${AdminBaseURl}/changepassword`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(user)

        }).then(response => response.json())
        return response.data;
    };
    /**
     * this function will let admin to log out
     * @param {string} token
     * @returns {object}
     */
    static async logoutAdmin(token) {
        const response = await fetch(`${AdminBaseURl}/logout`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(response => response.json())
        return response;
    };

    /**
     * this function Edit admin Profile
     * @param {object} user
     * take user object like this{
        "Name" : "أحمد محمد",
        "PhoneNumber" : "01129283294",
        "Gender" : "M",
        "Address" : "Cairo"
    }
    * @param {string} token
    * @returns {object}
    */
    static async editAdminProfile(user, token) {
        const response = await fetch(`${AdminBaseURl}/updatecurrent`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(user)

        }).then(response => response.json())
        
        return response;
    };
   
    /////////////////////////// Areas  ///////////////////////////
    /**
     * this function to add new area
     * @param {object} area
     * take area object like this
     *   {
             "Name": "6th October",
             "GovernorateId": 2
        }
     * @returns {object}
     */
    static async AddArea(area, token) {
        const response = await fetch(`${AreaBaseURl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(area)

        }).then(response => response.json())
        
        return response;
    }

    /**
     * this function to edit area
     * @param {object} area
     * take area object like this
     *   {
            "Name": "6th October - Updated",
            "GovernorateId": 3
         }
     * @returns {object}
     */
    static async EditArea( areaId,area, token) {
        const response = await fetch(`${AreaBaseURl}/${areaId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(area)

        }).then(response => response.json())
        
        return response;
    }
     /**
     * this function to get areas by GovId
     * @param {int} GovId
     * @returns {object}
     */
        static async getAreasOfGov(GovId, token) {
            const response = await fetch(`${AreaBaseURl}/${GovId}`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            }).then(response => response.json())
            
            return response;
        }
    /**
     * this function to delete area
     * @param {int} areaId
     * @returns boolean
     */
    static async DeleteArea(areaId, token) {
        const response = await fetch(`${AreaBaseURl}/${areaId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(response => response.json())
        
        return response;
    }
    /////////////////////////// Regions ///////////////////////////
     /**
     * this function to add new region
     * @param {object} region
     * take region object like this
     *  {
            "Name": "1st District",
            "AreaId": 3
        }
     * @returns {object}
     */
        static async AddRegion(region, token) {
            const response = await fetch(`${RegionBaseURl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(region)
    
            }).then(response => response.json())
            
            return response;
        }  
         /**
     * this function to edit region
     * @param {object} region
     * take region object like this
     *  {
            "Name": "1st District-updated",
            "AreaId": 3
        }
     * @returns {object}
     */
    static async EditRegion( regionId,region, token) {
        const response = await fetch(`${RegionBaseURl}/${regionId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(region)

        }).then(response => response.json())
        
        return response;
    }  
     /**
     * this function to get regions by AreaId
     * @param {int} AreaId
     * @returns {object}
     */
     static async getRegionsOfArea(AreaId, token) {
        const response = await fetch(`${RegionBaseURl}/${AreaId}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(response => response.json())
        
        return response;
    }
    
     /**
     * this function to delete region
     * @param {int} regionId
     * @returns boolean
     */
     static async DeleteRegion(regionId, token) {
        const response = await fetch(`${RegionBaseURl}/${regionId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(response => response.json())
        
        return response;
    }
    /////////////////////////// Aparetments ///////////////////////////
        /**
     * this function to add new aparetment
     * @param {string} Title
     * @param {string} Description
     * @param {number} RegionId
     * @param {string} Floor
     * @param {string} Condition // 1 for Rent | 2 for Buy | 3 for Both
     * @param {number} Price
     * @param {Array<File>} files  // An array of File objects representing images.
     * @param {number} ApartmentType
     * @param {string} token
     * @returns boolean
     */
        static async addAparetment(Title,Description,RegionId,Floor,Condition,Price,files,ApartmentType,token) {
            const formData = new FormData();
            formData.append("Title", Title);
            formData.append("Description", Description);
            formData.append("Floor", Floor);
            formData.append("RegionId", RegionId);
            formData.append("Condition", Condition);
            formData.append("Price", Price);
            formData.append("ApartmentType", ApartmentType);
            
            for (let i = 0; i < files.length; i++)
             {
                formData.append("Pictures", files[i]);
             }
            
            const response = await fetch(`${ApartmentBaseURl}`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
    
            }).then(response => response.json())
            
            return response;
        }
        /**
     * this function to update aparetment
     * @param {number} AppartmentId  // 1 based
     * @param {string} Title
     * @param {string} Description
     * @param {number} RegionId
     * @param {string} Floor
     * @param {string} Condition // 1 for Rent | 2 for Buy | 3 for Both
     * @param {number} Price
     * @param {Array<File>} files  // An array of File objects representing images.
     * @param {number} ApartmentType
     * @param {string} token
     * @returns boolean
     */
        static async editAparetment(AppartmentId,Title,Description,RegionId,Floor,Condition,Price,files,ApartmentType,token) {
            const formData = new FormData();
            formData.append("Title", Title);
            formData.append("Description", Description);
            formData.append("Floor", Floor);
            formData.append("RegionId", RegionId);
            formData.append("Condition", Condition);
            formData.append("Price", Price);
            formData.append("ApartmentType", ApartmentType);
            
            for (let i = 0; i < files.length; i++)
             {
                formData.append("Pictures", files[i]);
             }
            
            const response = await fetch(`${ApartmentBaseURl}/${AppartmentId}`, {
                method: 'PUT',
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
    
            }).then(response => response.json())
            
            return response;
        }

    /**
     * this function to get all apartments
     * @returns {object}
     */
     static async getAllApartments(param) {
        const response = await fetch(`${ApartmentBaseURl}${param}`, {
            method: 'GET',
        }).then(response => response.json())
        
        return response;
    }

    /**
     * this function to get all apartments
     * @returns {object}
     */
    static async getApartmentById(id,lng) {
        const response = await fetch(`${ApartmentBaseURl}?Id=${id}&language=${lng}`, {
            method: 'GET',
        }).then(response => response.json())
        
        return response;
    }

       /**
     * this function to delete apartment
     * @param {int} appartmentId
     * @returns boolean
     */
       static async deleteAppartment(appartmentId, token) {
        const response = await fetch(`${ApartmentBaseURl}/${appartmentId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(response => response.json())
        
        return response;
    }


}

/**
 * contact us
 * @param {object} data 
 * @returns 
 */

export async function contactUs(data) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(data);

    let response= await fetch(`${BaseURl}/contact`,
        {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        })
        .then( response=> response.json())
    return response;
}
