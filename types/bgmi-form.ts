export interface BGMIFormData {
  // Section 1: Team Details
  teamName: string;
  teamLogoLink: string; // Changed from File to string for link
  universityName: string;
  teamLeaderName: string;
  teamLeaderPhone: string;
  teamLeaderCollegeIdLink: string; // Changed from File to string for link
  teamLeaderUID: string;
  teamLeaderInGameName: string;
  teamLeaderEmail: string;
  teamLeaderAadhar: string;

  // Section 2: Player 2
  player2Name: string;
  player2UID: string;
  player2InGameName: string;
  player2Aadhar: string;
  player2CollegeIdLink: string; // Changed from File to string for link
  player2Phone: string;

  // Section 3: Player 3
  player3Name: string;
  player3UID: string;
  player3InGameName: string;
  player3Aadhar: string;
  player3CollegeIdLink: string; // Changed from File to string for link
  player3Phone: string;

  // Section 4: Player 4
  player4Name: string;
  player4UID: string;
  player4InGameName: string;
  player4Aadhar: string;
  player4CollegeIdLink: string; // Changed from File to string for link
  player4Phone: string;

  // Section 5: Player 5
  player5Name: string;
  player5UID: string;
  player5InGameName: string;
  player5Aadhar: string;
  player5CollegeIdLink: string; // Changed from File to string for link
  player5Phone: string;
}

export const initialBGMIFormData: BGMIFormData = {
  // Section 1: Team Details
  teamName: "",
  teamLogoLink: "", // Changed from null to empty string
  universityName: "",
  teamLeaderName: "",
  teamLeaderPhone: "",
  teamLeaderCollegeIdLink: "", // Changed from null to empty string
  teamLeaderUID: "",
  teamLeaderInGameName: "",
  teamLeaderEmail: "",
  teamLeaderAadhar: "",

  // Section 2: Player 2
  player2Name: "",
  player2UID: "",
  player2InGameName: "",
  player2Aadhar: "",
  player2CollegeIdLink: "", // Changed from null to empty string
  player2Phone: "",

  // Section 3: Player 3
  player3Name: "",
  player3UID: "",
  player3InGameName: "",
  player3Aadhar: "",
  player3CollegeIdLink: "", // Changed from null to empty string
  player3Phone: "",

  // Section 4: Player 4
  player4Name: "",
  player4UID: "",
  player4InGameName: "",
  player4Aadhar: "",
  player4CollegeIdLink: "", // Changed from null to empty string
  player4Phone: "",

  // Section 5: Player 5
  player5Name: "",
  player5UID: "",
  player5InGameName: "",
  player5Aadhar: "",
  player5CollegeIdLink: "", // Changed from null to empty string
  player5Phone: "",
};