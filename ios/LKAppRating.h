#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(LKAppRating, RCTEventEmitter)

RCT_EXTERN_METHOD(
                  rate:(NSString *)appleAppId
                  )
RCT_EXTERN_METHOD(
                  writeReview:(NSString *)appleAppId
                  )
@end


