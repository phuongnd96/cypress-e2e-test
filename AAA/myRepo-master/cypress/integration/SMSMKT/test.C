public
int checkValidSampleMessage(string templateContent, string sampleMessage)
{

    try
    {
        //check tin nhan mau~ khop' phan` co' dinh
        string templateTemp = Regex.Replace(templateContent, @"(?<!\\){[ABCD],\d*(?<!\\)}", ".*");
        templateTemp = replaceTemplateIgnore(templateTemp);
        templateTemp = Regex.Replace(templateTemp, @"\{", @"\{");
        templateTemp = Regex.Replace(templateTemp, @"\}", @"\}");
        templateTemp = replaceSpecCharRegex(templateTemp);
        templateTemp = "^" + templateTemp + "$";
        if (!Regex.IsMatch(sampleMessage, templateTemp))
        {
            return -1;
        }
        //
        //templateContent = Regex.Replace(templateContent, @"(?<!\\){D}", ".*");// replace toan bo tham bien D trc
        templateContent = replaceSpecCharRegex(templateContent);
        MatchCollection matchParams = getListTemplateParams(templateContent);
        foreach (Match item in matchParams)
        {
            string temp = item.Value;
            char templateType = temp[1];
            string maxLength = temp.Substring(3, temp.Length - 4);
            if (templateType == 'A')
            {
                templateContent = Regex.Replace(templateContent, @"(?<!\\){A," + maxLength + "}", "[^\\.]{0," + maxLength + "}");
            }
            else if (templateType == 'B')
            {
                templateContent = Regex.Replace(templateContent, @"(?<!\\){B," + maxLength + "}", "[0-9\\.]{0," + maxLength + "}");
            }
            else if (templateType == 'C')
            {
                templateContent = Regex.Replace(templateContent, @"(?<!\\){C," + maxLength + "}", "[^\\s]{0," + maxLength + "}");
            }
            else if (templateType == 'D')
            {
                templateContent = Regex.Replace(templateContent, @"(?<!\\){D," + maxLength + "}", ".{0," + maxLength + "}");
            }
        }
        //
        templateContent = "^" + templateContent + "$";
        if (!Regex.IsMatch(sampleMessage, templateContent))
        {
            return -2;
        }
    }
    catch (Exception ex)
    {
    }
    return 0;
}