/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let set = new Set();
  let temp;

  for (const email of emails) {
    let [localName, domainName] = email.split("@");
    localName = localName.split("+")[0];
    localName = localName.replace(/\./g, "");
    temp = `${localName}@${domainName}`;
    set.add(temp);
  }

  console.log(set);

  return set.size;
};
