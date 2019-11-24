module.exports = class defaultConfig
{
    constructor(config)
    { 
        this.config=config
    }
    getPackages()
    {
       return [{name:"uuid"}]
    }
    getMessage()
	{
		return{
			default001:"user not exist", 
		}
	}
    getVersionedPackages()
    { 
      return []
    }
    getDefaultConfig()
    {
      return{
		drivers:[
			{name:"global"}
		]
		 
      }
    }
}