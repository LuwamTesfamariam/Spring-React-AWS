package springreactaws.repo;

import org.springframework.stereotype.Repository;
import springreactaws.profile.UserProfile;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class UserProfileData {
    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();
    static {
        USER_PROFILES.add( new UserProfile(UUID.randomUUID(), "Luwam", null));
        USER_PROFILES.add( new UserProfile(UUID.randomUUID(), "Fanus", null));
    }

    public List<UserProfile> getUserProfiles(){
        return USER_PROFILES;
    }
}
