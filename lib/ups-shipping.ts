

interface UPSConfig {
  clientId: string
  clientSecret: string
  accountNumber?: string
  sandbox?: boolean
}

interface ShippingAddress {
  name: string
  addressLine1: string
  addressLine2?: string
  city: string
  stateProvinceCode: string
  postalCode: string
  countryCode: string
}

interface ShippingPackage {
  weight: number
  length?: number
  width?: number
  height?: number
}

interface ShippingRate {
  service: string
  cost: number
  deliveryTime: string
}

export class UPSShippingService {
  private config: UPSConfig
  private baseUrl: string

  constructor(config: UPSConfig) {
    this.config = config
    this.baseUrl = config.sandbox 
      ? 'https://wwwcie.ups.com/api' 
      : 'https://onlinetools.ups.com/api'
  }

  async getAccessToken(): Promise<string> {
    const auth = Buffer.from(`${this.config.clientId}:${this.config.clientSecret}`).toString('base64')
    
    const response = await fetch(`${this.baseUrl}/security/v1/oauth/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    })

    const data = await response.json()
    return data.access_token
  }

  async calculateShippingRates(
    origin: ShippingAddress,
    destination: ShippingAddress,
    packages: ShippingPackage[]
  ): Promise<ShippingRate[]> {
    try {
      const accessToken = await this.getAccessToken()
      
      const requestBody = {
        RateRequest: {
          Request: {
            RequestOption: 'Rate',
            TransactionReference: {
              CustomerContext: 'Nature\'s Way Soil Shipping'
            }
          },
          Shipment: {
            Shipper: {
              Name: 'Nature\'s Way Soil',
              AttentionName: 'Shipping Department',
              ShipperNumber: this.config.accountNumber,
              Address: {
                AddressLine: [origin.addressLine1, origin.addressLine2].filter(Boolean),
                City: origin.city,
                StateProvinceCode: origin.stateProvinceCode,
                PostalCode: origin.postalCode,
                CountryCode: origin.countryCode
              }
            },
            ShipTo: {
              Name: destination.name,
              Address: {
                AddressLine: [destination.addressLine1, destination.addressLine2].filter(Boolean),
                City: destination.city,
                StateProvinceCode: destination.stateProvinceCode,
                PostalCode: destination.postalCode,
                CountryCode: destination.countryCode
              }
            },
            ShipFrom: {
              Name: 'Nature\'s Way Soil',
              Address: {
                AddressLine: [origin.addressLine1, origin.addressLine2].filter(Boolean),
                City: origin.city,
                StateProvinceCode: origin.stateProvinceCode,
                PostalCode: origin.postalCode,
                CountryCode: origin.countryCode
              }
            },
            Package: packages.map((pkg, index) => ({
              PackagingType: {
                Code: '02', // Customer Supplied Package
                Description: 'Package'
              },
              Dimensions: pkg.length && pkg.width && pkg.height ? {
                UnitOfMeasurement: {
                  Code: 'IN',
                  Description: 'Inches'
                },
                Length: pkg.length.toString(),
                Width: pkg.width.toString(),
                Height: pkg.height.toString()
              } : undefined,
              PackageWeight: {
                UnitOfMeasurement: {
                  Code: 'LBS',
                  Description: 'Pounds'
                },
                Weight: pkg.weight.toString()
              }
            }))
          }
        }
      }

      const response = await fetch(`${this.baseUrl}/rating/v1/Rate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })

      const data = await response.json()
      
      if (data.RateResponse?.RatedShipment) {
        const rates = Array.isArray(data.RateResponse.RatedShipment) 
          ? data.RateResponse.RatedShipment 
          : [data.RateResponse.RatedShipment]

        return rates.map((rate: any) => ({
          service: rate.Service.Description || rate.Service.Code,
          cost: parseFloat(rate.TotalCharges.MonetaryValue),
          deliveryTime: this.getDeliveryTime(rate.Service.Code)
        }))
      }

      return []
    } catch (error) {
      console.error('UPS Shipping Error:', error)
      return []
    }
  }

  private getDeliveryTime(serviceCode: string): string {
    const deliveryTimes: { [key: string]: string } = {
      '01': '1 Business Day', // Next Day Air
      '02': '2 Business Days', // 2nd Day Air
      '03': '1-5 Business Days', // Ground
      '12': '1-3 Business Days', // 3 Day Select
      '13': '1 Business Day', // Next Day Air Saver
      '14': '1 Business Day', // Next Day Air Early AM
      '59': '2 Business Days', // 2nd Day Air AM
      '65': '1 Business Day' // Express Saver
    }
    return deliveryTimes[serviceCode] || '3-7 Business Days'
  }

  async createShipment(
    origin: ShippingAddress,
    destination: ShippingAddress,
    packages: ShippingPackage[],
    serviceCode: string = '03' // Default to Ground
  ): Promise<any> {
    try {
      const accessToken = await this.getAccessToken()
      
      const requestBody = {
        ShipmentRequest: {
          Request: {
            RequestOption: 'nonvalidate',
            TransactionReference: {
              CustomerContext: 'Nature\'s Way Soil Order'
            }
          },
          Shipment: {
            Description: 'Organic Fertilizers',
            Shipper: {
              Name: 'Nature\'s Way Soil',
              AttentionName: 'Shipping Department',
              ShipperNumber: this.config.accountNumber,
              Address: {
                AddressLine: [origin.addressLine1, origin.addressLine2].filter(Boolean),
                City: origin.city,
                StateProvinceCode: origin.stateProvinceCode,
                PostalCode: origin.postalCode,
                CountryCode: origin.countryCode
              }
            },
            ShipTo: {
              Name: destination.name,
              Address: {
                AddressLine: [destination.addressLine1, destination.addressLine2].filter(Boolean),
                City: destination.city,
                StateProvinceCode: destination.stateProvinceCode,
                PostalCode: destination.postalCode,
                CountryCode: destination.countryCode
              }
            },
            ShipFrom: {
              Name: 'Nature\'s Way Soil',
              Address: {
                AddressLine: [origin.addressLine1, origin.addressLine2].filter(Boolean),
                City: origin.city,
                StateProvinceCode: origin.stateProvinceCode,
                PostalCode: origin.postalCode,
                CountryCode: origin.countryCode
              }
            },
            Service: {
              Code: serviceCode,
              Description: this.getServiceDescription(serviceCode)
            },
            Package: packages.map((pkg) => ({
              Description: 'Organic Fertilizer',
              PackagingType: {
                Code: '02'
              },
              Dimensions: pkg.length && pkg.width && pkg.height ? {
                UnitOfMeasurement: {
                  Code: 'IN'
                },
                Length: pkg.length.toString(),
                Width: pkg.width.toString(),
                Height: pkg.height.toString()
              } : undefined,
              PackageWeight: {
                UnitOfMeasurement: {
                  Code: 'LBS'
                },
                Weight: pkg.weight.toString()
              }
            }))
          },
          LabelSpecification: {
            LabelImageFormat: {
              Code: 'GIF'
            },
            HTTPUserAgent: 'Mozilla/4.5'
          }
        }
      }

      const response = await fetch(`${this.baseUrl}/shipments/v1/ship`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })

      return await response.json()
    } catch (error) {
      console.error('UPS Create Shipment Error:', error)
      throw error
    }
  }

  private getServiceDescription(serviceCode: string): string {
    const services: { [key: string]: string } = {
      '01': 'Next Day Air',
      '02': '2nd Day Air',
      '03': 'Ground',
      '12': '3 Day Select',
      '13': 'Next Day Air Saver',
      '14': 'Next Day Air Early AM',
      '59': '2nd Day Air AM',
      '65': 'Express Saver'
    }
    return services[serviceCode] || 'Ground'
  }

  async trackPackage(trackingNumber: string): Promise<any> {
    try {
      const accessToken = await this.getAccessToken()
      
      const response = await fetch(
        `${this.baseUrl}/track/v1/details/${trackingNumber}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      )

      return await response.json()
    } catch (error) {
      console.error('UPS Tracking Error:', error)
      throw error
    }
  }
}

// Factory function to create UPS service instance
export function createUPSService(config: UPSConfig): UPSShippingService {
  return new UPSShippingService(config)
}

// Default configuration using environment variables
export function getUPSConfig(): UPSConfig {
  return {
    clientId: process.env.UPS_CLIENT_ID || '',
    clientSecret: process.env.UPS_CLIENT_SECRET || '',
    accountNumber: process.env.UPS_ACCOUNT_NUMBER || '',
    sandbox: process.env.NODE_ENV !== 'production'
  }
}

