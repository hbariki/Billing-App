export default {
    productList : [
        {
            id: 1,
            name:'Barracuda Backup',
            modelList: [
                {
                    id: 1,
                    deploymentId: 1,
                    name: 'B190',
                    price: 500
                },
                {
                    id: 2,
                    deploymentId: 1,
                    name: 'B290',
                    price: 1500
                },
                {
                    id: 3,
                    deploymentId: 1,
                    name: 'B390',
                    price: 2500
                },
                {
                    id: 4,
                    deploymentId: 3,
                    name: 'Cloud-to-Cloud Backup',
                    price: 500
                }
            ],
            deploymentOptionList: [
                { id: 1, name: 'Appliance' },
                { id:3,  name:'Cloud Subscription'}
            ]
         },
        {
            id: 2,
            name:'NextGen Firewall',
            modelList: [
                {
                    id: 5,
                    deploymentId: 1,
                    name: 'FW100',
                    price: 1000
                },
                {
                    id: 6,
                    deploymentId: 1,
                    name: 'FW200',
                    price: 1500
                },
                {
                    id: 7,
                    deploymentId: 1,
                    name: 'FW300',
                    price: 3500
                },
                {
                    id: 8,
                    deploymentId: 1,
                    name: 'FW400',
                    price: 5000
                },
                {
                    id: 9,
                    deploymentId: 2,
                    name: 'FW100-V',
                    price: 500
                },
                {
                    id: 10,
                    deploymentId: 2,
                    name: 'FW200-V',
                    price: 7500
                },
                {
                    id: 11,
                    deploymentId: 2,
                    name: 'FW300-V',
                    price: 1750
                },
                {
                    id: 12,
                    deploymentId: 2,
                    name: 'FW400-V',
                    price: 2500
                }
            ],
            deploymentOptionList: [
                { id: 1, name: 'Appliance' },
                { id: 2,  name:'Virtual Appliance' }
            ]
        },
        {
            id: 3,
            name:'Email Security Gateway',
            modelList: [
                {
                    id: 13,
                    deploymentId: 1,
                    name: 'EM100',
                    price: 1000
                },
                {
                    id: 14,
                    deploymentId: 1,
                    name: 'EM200',
                    price: 2000
                },
                {
                    id: 15,
                    deploymentId: 2,
                    name: 'EM100-V',
                    price: 500
                },
                {
                    id: 16,
                    deploymentId: 2,
                    name: 'EM200-V',
                    price: 1000
                }
            ],
            deploymentOptionList: [
                { id: 1, name: 'Appliance' },
                { id:2,  name:'Virtual Appliance' }
            ]
        }
    ]
}
