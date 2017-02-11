using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using ViewModel;
using static ViewModel.ConfigModels;

namespace CommonUtils.AppConfiguration
{
    public class AppConfigFunctions
    {
        public XDocument configFile { get; set; }

        ///-------------------------------------------------------------------------------------------------
        /// <summary>   Default constructor. </summary>
        ///
        /// <remarks>   Pdelosreyes, 2/9/2017. </remarks>
        ///-------------------------------------------------------------------------------------------------
        public AppConfigFunctions()
        {
            configFile = new XDocument();
        }

        public AppConfigFunctions(XDocument xmlDoc)
        {
            configFile = xmlDoc;
        }

        ///-------------------------------------------------------------------------------------------------
        /// <summary>   List configuration variables. </summary>
        ///
        /// <remarks>   Pdelosreyes, 2/10/2017. </remarks>
        ///
        /// <param name="keys"> The keys. </param>
        ///
        /// <returns>   A List&lt;AttributeKeyValuePair&gt; </returns>
        ///-------------------------------------------------------------------------------------------------
        public List<AttributeKeyValuePair> ListConfigVariables(List<AttributeKeyValuePair> keys)
        {
            foreach (var element in configFile.Descendants())
            {
                foreach (var keyValue in keys)
                {
                    /// todo:
                    /// Figure out element / key pair that will match!
                    if (element.Name == keyValue.attribute && element.Name == keyValue.key)
                    {
                        keyValue.value = element.Value;
                    }
                }
            }
            return keys;
        }

        ///-------------------------------------------------------------------------------------------------
        /// <summary>   List configuration variables. </summary>
        ///
        /// <remarks>   Pdelosreyes, 2/10/2017. </remarks>
        ///
        /// <returns>   A List&lt;AttributeKeyValuePair&gt; </returns>
        ///-------------------------------------------------------------------------------------------------
        public List<AttributeKeyValuePair> ListConfigVariables()
        {
            return ListConfigVariables(configFile);
        }

        ///-------------------------------------------------------------------------------------------------
        /// <summary>   List configuration variables. </summary>
        ///
        /// <remarks>   Pdelosreyes, 2/10/2017. </remarks>
        ///
        /// <param name="xmlDoc">   The XML document. </param>
        ///
        /// <returns>   A List&lt;AttributeKeyValuePair&gt; </returns>
        ///-------------------------------------------------------------------------------------------------
        public List<AttributeKeyValuePair> ListConfigVariables(XDocument xmlDoc)
        {
            var keyValues = new List<AttributeKeyValuePair>();
            foreach (var element in configFile.Descendants())
            {
                if (element.Name == "key" || element.Name == "name")
                {
                    keyValues.Add(new AttributeKeyValuePair() { attribute = element.FirstAttribute.ToString(), key = element.Name.ToString(), value = element.Value.ToString() });
                }
            }
            return keyValues;
        }

        ///-------------------------------------------------------------------------------------------------
        /// <summary>   Gets key value. </summary>
        ///
        /// <remarks>   Pdelosreyes, 2/10/2017. </remarks>
        ///
        /// <param name="attribute">    The attribute. </param>
        /// <param name="appKey">       The application key. </param>
        ///
        /// <returns>   The key value. </returns>
        ///-------------------------------------------------------------------------------------------------
        public AttributeKeyValuePair GetKeyValue(string attribute, string appKey)
        {
            var list = from appNode in configFile.Elements()
                   where appNode.Attribute(attribute).Value == appKey
                   select appNode;

            var e = list.FirstOrDefault();

            XElement element = configFile.Descendants(appKey).FirstOrDefault();
            return new AttributeKeyValuePair()
            {
                attribute = attribute,
                key = appKey,
                value = element.Value
            };
        }

        ///-------------------------------------------------------------------------------------------------
        /// <summary>   Removes the key value. </summary>
        ///
        /// <remarks>   Pdelosreyes, 2/10/2017. </remarks>
        ///
        /// <param name="attribute">    The attribute. </param>
        /// <param name="appKey">       The application key. </param>
        /// <param name="element">      (Optional) The element. </param>
        ///
        /// <returns>   An Enums.ModifyResult. </returns>
        ///-------------------------------------------------------------------------------------------------
        public Enums.ModifyResult RemoveKeyValue(string attribute, string appKey, string element = null)
        {
            if (String.IsNullOrEmpty(element))
            {
                if (!configFile.Descendants(appKey).Any())
                    return Enums.ModifyResult.NotFound;
            }
            else
            {
                if (!configFile.Elements(element).Descendants(appKey).Any())
                    return Enums.ModifyResult.NotFound;
            }

            try
            {
                if (String.IsNullOrEmpty(element))
                {
                    configFile.Descendants(appKey).Remove();
                }
                else
                {
                    configFile.Element(element).Descendants(appKey).Remove();
                }
                    return Enums.ModifyResult.Removed;
            }
            catch (Exception ex)
            {
                return Enums.ModifyResult.Failed;
                // this.Logger.Error(ExamineException.GetInnerExceptionAndStackTrackMessage(ex));

            }
            return Enums.ModifyResult.Unknown;
        }

        ///-------------------------------------------------------------------------------------------------
        /// <summary>   Adds a key value to 'value'. </summary>
        ///
        /// <remarks>   Pdelosreyes, 2/10/2017. </remarks>
        ///
        /// <param name="appKey">   The application key. </param>
        /// <param name="value">    The value. </param>
        ///
        /// <returns>   An Enums.ModifyResult. </returns>
        ///-------------------------------------------------------------------------------------------------
        public Enums.ModifyResult AddKeyValue(string appKey, string value)
        {
            return UpdateOrCreateAppSetting(appKey, "value", value, "key", "appSettings");
        }

        ///-------------------------------------------------------------------------------------------------
        /// <summary>   Adds a connection string to 'value'. </summary>
        ///
        /// <remarks>   Pdelosreyes, 2/10/2017. </remarks>
        ///
        /// <param name="appKey">   The application key. </param>
        /// <param name="value">    The value. </param>
        ///
        /// <returns>   An Enums.ModifyResult. </returns>
        ///-------------------------------------------------------------------------------------------------
        public Enums.ModifyResult AddConnectionString(string appKey, string value)
        {
            return UpdateOrCreateAppSetting(appKey, "connectionString", value, "name", "connectionStrings");
        }

        ///-------------------------------------------------------------------------------------------------
        /// <summary>   Updates the or create application setting. </summary>
        ///
        /// <remarks>   Pdelosreyes, 2/10/2017. </remarks>
        ///
        /// <param name="appKey">       The application key. </param>
        /// <param name="valueName">    Name of the value. </param>
        /// <param name="value">        The value. </param>
        /// <param name="attribute">    The attribute. </param>
        /// <param name="element">      (Optional) The element. </param>
        ///
        /// <returns>   An Enums.ModifyResult. </returns>
        ///-------------------------------------------------------------------------------------------------
        public Enums.ModifyResult UpdateOrCreateAppSetting(string attribute, string appKey, string valueName, string value, string element = null)
        {
            if (String.IsNullOrEmpty(element))
            {
                if (appKey == "key")
                    element = "appSettings";
                if (valueName == "connectionString")
                    element = "connectionStrings";
            }

            var list = from appNode in configFile.Descendants(element).Elements()
                       where appNode.Attribute(attribute).Value == appKey
                       select appNode;
            var e = list.FirstOrDefault();

            try
            {
                // If the element doesn't exist, create it
                if (e == null)
                {
                    configFile.Root.Element(element)
                        .Add(new XElement("add"
                                , new XAttribute(attribute, appKey)
                                , new XAttribute(valueName, value)));
                    return Enums.ModifyResult.Created;
                }
                else
                {
                    e.Attribute(valueName).SetValue(value);
                    return Enums.ModifyResult.Updated;
                }
            }
            catch (Exception ex)
            {
                return Enums.ModifyResult.Failed;
                //this.Logger.Error(ExamineException.GetInnerExceptionAndStackTrackMessage(ex));
            }
            return Enums.ModifyResult.Unknown;
        }
    }
}
