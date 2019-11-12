//
//  ReviewRatingManager.swift
//  toeiclistening
//
//  Created by Long Cao on 7/26/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import UIKit
import StoreKit

@objc(LKAppRating)
class LKAppRating: RCTEventEmitter {
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  // we need to override this method and
  // return an array of event names that we can listen to
  override func supportedEvents() -> [String]! {
    return ["onSoundFinishedPlaying"]
  }
  
  func runOnMainThread(_ task: @escaping ()->Void)
  {
    DispatchQueue.main.async {
      task()
    }
  }
  
  
  @objc func rate(_ appleAppId : String){
    if #available(iOS 10.3, *) {
      self.runOnMainThread {
        SKStoreReviewController.requestReview()
      }
    } else {
      self.runOnMainThread({ () -> Void in
        let url  = NSURL(string: "itms-apps://itunes.apple.com/app/id\(appleAppId)")
        if UIApplication.shared.canOpenURL(url! as URL) == true  {
          if #available(iOS 10.0, *) {
            UIApplication.shared.open(url! as URL)
          } else {
            UIApplication.shared.openURL(url! as URL)
          }
        }
      })
    }
  }
    
  @objc func openAppStore(_ appleAppId : String){
      self.runOnMainThread({ () -> Void in
        let url  = NSURL(string: "itms-apps://itunes.apple.com/app/id\(appleAppId)")
        if UIApplication.shared.canOpenURL(url! as URL) == true  {
          if #available(iOS 10.0, *) {
            UIApplication.shared.open(url! as URL)
          } else {
            UIApplication.shared.openURL(url! as URL)
          }
        }
      })
   }
  
  @objc func writeReview(_ appleAppId : String){
    if #available(iOS 10.3, *) {
      self.runOnMainThread {
        SKStoreReviewController.requestReview()
      }
    } else {
      self.runOnMainThread({ () -> Void in
        let url  = NSURL(string: "itms-apps://itunes.apple.com/app/id\(appleAppId)?action=write-review")
        if UIApplication.shared.canOpenURL(url! as URL) == true  {
          if #available(iOS 10.0, *) {
            UIApplication.shared.open(url! as URL)
          } else {
            UIApplication.shared.openURL(url! as URL)
          }
        }
      })
    }
  }
  
}
