

module.exports = class globalClass
{
	constructor()
	{
		
        String.prototype.replaceAll = function(search, replacement) {
          var target = this;
          return target.replace(new RegExp(search, 'g'), replacement);
        };
        String.prototype.replaceAt=function(index, replacement) {
          return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
        }
	}
}