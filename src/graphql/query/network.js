import { gql } from 'apollo-boost';

export const getNetworks = gql`
    query{
        networks{
            _id,
            label,
            ip,
            macAddress,
            sector_info{
                label
            }
        }
    }
`;